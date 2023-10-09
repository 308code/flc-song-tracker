export class Played {
  private datePlayed: Date;
  private notes: string;
  private series: string;


  getDatePlayed(): Date {
    return this.datePlayed;
  }

  setDatePlayed(value: Date) {
    this.datePlayed = value;
  }

  getNotes(): string {
    return this.notes;
  }

  setNotes(value: string) {
    this.notes = value;
  }

  getSeries(): string {
    return this.series;
  }

  setSeries(value: string) {
    this.series = value;
  }

  constructor(datePlayed: string, notes: string, series: string) {
    this.datePlayed = new Date(datePlayed);
    //this.datePlayed.toLocaleString('en-US', { timeZone: 'America/New_York' });
    this.notes = notes;
    this.series = series;
  }

}
