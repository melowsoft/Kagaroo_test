import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x1: number = null
  x2: number = null
  v1: number = null
  v2: number = null
  result: string = ""

  constructor() {
    this.createStorage();
   }

  ngOnInit() {
  }

  calculateResult(){
    const x1 = this.x1
    const x2 = this.x2
    const v1 = this.v1
    const v2 = this.v2
    const history = JSON.parse(localStorage.getItem("results"))
      if(x1 !== null && x2 !== null && v1 !== null && v2 !== null){
        if(v1 <= v2) return "NO";//return if second velocity is greater than first
        if((x2 - x1) % (v2 - v1) === 0){
        //Save result log here
        let date = Date.now();
        let result = "YES";
        let fields = `${x1} ${v1} ${x2} ${v2}`
        const log = {date, result, fields}
        history.push(log)
        this.saveResult(history);
        this.result = "YES"
        //clear fields
       return this.clearFields()
        } else {
          let date = Date.now();
        let result = "NO";
        let fields = `${x1} ${v1} ${x2} ${v2}`
        const log = {date, result, fields}
        history.push(log)
        this.saveResult(history);
        this.result = "NO"
        //clear fields
        return this.clearFields()
        }
      }
  }

  clearFields(){
    this.x1 = null
    this.x2 = null
    this.v1 = null
    this.v2 = null
  }

  createStorage(){
    const results = [];
    localStorage.setItem('results', JSON.stringify(results));
  }

  saveResult(log){
    localStorage.setItem("results", JSON.stringify(log));
  }
}
