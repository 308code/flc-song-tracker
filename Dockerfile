FROM node:16.13.0-alpine AS songtrackerfrontend

COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
#R#UN npm run buildwithbase

#COPY dist/flc-song-tracker nginx-container:/srv/songtracker
FROM nginx:alpine
COPY --from=songtrackerfrontend /app/dist/flc-song-tracker /usr/share/nginx/html/
EXPOSE 82
