import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-families',
  templateUrl: './dashboard-families.component.html',
  styleUrls: ['./dashboard-families.component.scss']
})
export class DashboardFamiliesComponent  implements OnInit, AfterViewInit  {
  tableData: any[] = [];
  tableData2: any[] = [];

  constructor(private http: HttpClient, private renderer: Renderer2) { }
  ngAfterViewInit(): void {
   
  }

  ngOnInit(): void {
    this.getTableDataFamilies();
     this.getTableDataContinents(); 
 /*    const image = this.imagefamilies.nativeElement;
    this.renderer.setStyle(image , 'width', '100%')!; */
   /*  this.getImages(this.tableData); */
  }

  getTableDataFamilies(): void {
    this.http.get<any[]>('http://localhost:8000/families')
      .subscribe(data => {
        this.tableData = data;
        console.log(this.tableData);
      });
  }

  getTableDataContinents(): void {
    this.http.get<any[]>('http://localhost:8000/continents')
      .subscribe(data => {
        this.tableData2 = data;
        console.log(this.tableData);
      });
  }
}
