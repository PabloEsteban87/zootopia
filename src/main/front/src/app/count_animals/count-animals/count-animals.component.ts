import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-count-animals',
  templateUrl: './count-animals.component.html',
  styleUrls: ['./count-animals.component.scss']
})
export class CountAnimalsComponent implements OnInit {

  constructor(private http: HttpClient){}

  tableData: any[] = [];
  count!: number; 
  tableData2: any[] = [];
  
  
  ngOnInit(): void{
    this.getTableDataCount();
  }


  getTableDataCount() {
    this.http.get<any[]>('http://localhost:8000/animals')
      .subscribe(data => {
        this.tableData = data;
        this.count = this.tableData.length; 
        return this.count;

      });
  }
}
