import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyLogs = [];
  constructor() { }

  ngOnInit() {
    this.fetchLogs();
  }

  fetchLogs(){
  const logs = JSON.parse(localStorage.getItem("results"));
  return this.historyLogs = logs

  }

}
