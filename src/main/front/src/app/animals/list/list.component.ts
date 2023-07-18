import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit, HostListener, Directive } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/Animal.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit{
/*   animals:Animal[];  */
  tableData: any[] = [];
  isFront: boolean;
/*   table!: HTMLCollection; */
  claseimagen: any [] = [];

  array_botones: any [] = [];

  rows: any;

/*  table: any; */

 index: any[] = [];

 id!: number;

 event: any;

/*  botones: any;
 table: any; */




  @ViewChild('submenu1') submenu1!: ElementRef;
/*   @ViewChild('boton') boton!: HTMLElement; */
  @ViewChild('rowsubmenu') rowsubmenu!: ElementRef;

/*   @ViewChild('button') boton!: HTMLElement; */

@ViewChild('button') boton!: HTMLElement;

/*   @ViewChild('index') index!: ElementRef; */
  enfoque: any;


  constructor(private http: HttpClient, private renderer: Renderer2, private router: Router){
    
    this.isFront = true;

  }
  ngAfterViewInit(){
   





/* 
     const botones = document.querySelectorAll('.boton')

 
     const table = document.getElementById('table'); */
 
 
    



  /*   if(this.rows){
      this.elem.nativeElement.querySelectorAll('.boton')
      .addEventListener('click', this.clicksubmenu.bind(event));
    }  */

  /*   this.button = this.button.nativeElement; */
    
 /*    let clickStream = Observable.(this.button, 'click'); */

/*     clickStream.subscribe(event => {
      console.log('click ' + event);
      this.clicks.push(this.clicks.length);
    }); */


/*    const button =  window.querySelectorAll('button');
   button.addEventListener() */


  /*   const button = this.elem.nativeElement.querySelectorAll('button'); */
  /*   this.renderer.listen(button, 'click', () => {
      console.log('Button clicked!');
    }); */
/*     
    const botones =  document.querySelectorAll('.boton');
    this.array_botones.push(botones); */


 /*  this.renderer.listen(this.rows.nativeElement, 'click', (event) => {console.log("click"); this.clicksubmenu();});  */
  }
  ngOnInit(): void {
    this.getTableDataAnimals();
    
  }

  
/*   table!: HTMLTableSectionElement;  */


  getTableDataAnimals(): void {
    this.http.get<any[]>('http://localhost:8000/animals')
      .subscribe(data => {
        this.tableData = data;
        console.log(this.tableData);
      });
  }

  buttonEdit(index: number){
    this.router.navigate(['/', index]);
     


  }

  buttonDelete(index: any){
    
    this.http.delete<any[]>('http://localhost:8000/animals', index)
    .subscribe(data => {
     


      Object.values(data).forEach(key => 
        console.log(this.id = key.id));
    });
    
    
    const table: any = document.querySelector('#table');
    table.rows[index].delete();
    alert("Ejemplar borrado");



  }


  

  /* clicksubmenu(event: any){ */
  /*     this.table = this.renderer.selectRootElement('#table');
    this.claseimagen.push(document.querySelectorAll(".rowmenu"));  */
    
 /*     const table: any = document.querySelector('#table');
    const rows = table.tBodies[0].rows;
    Array.from(rows).forEach((row, index) => {
     const writerows = Array.from(row.cells).map(td => td.textContent);  */
   /*   const target = event.target as HTMLElement; */
   /*   console.log(target);
   
     console.log(this.rows); */

    /*   table = (document.getElementById('table')!);  */
      /* console.log(this.renderer.('.row-submenu')); */
     
      
    
    /*   const botones: any = document.querySelectorAll('.boton')
  

      const table: any = document.getElementById('table');
      console.log(table) 
  
      
  
  
      let index = Array.from(botones).indexOf(event.target)!; */
    

      mostrarmenu = false;

    /*   clicksubmenu(index: any){
        const botones = document.querySelectorAll('.boton');
    
        const table: any = document.getElementById('table');

       table.rows[index].querySelector('.row-submenu').innerHTML = "hola" */
       /*  let index = Array.from(botones).indexOf(event.target)!; */
        
      /*   this.mostrarmenu = true;

      } */



 /*     });   */
   /*  if (this.isFront) {
   

    const fila: any = table.rows[index].querySelector('.row-submenu');

    console.log(index);
   table.rows[index].querySelector('.row-submenu').innerHTML = this.renderer.addClass(this.submenu1.nativeElement, 'show-menu');
   */
    
 
     
  /*   this.boton.querySelector('.row-submenu').innerHTML = this.renderer.addClass(this.rowsubmenu.nativeElement, 'show-menu');
 */




  /*   } else {
      const botones = document.querySelectorAll('.boton')
      console.log(botones)
  
      const table: any = document.getElementById('table');
  
  
      let index = Array.from(botones).indexOf(event.target)!;
    



      table.rows[index].querySelector('.row-submenu').innerHTML =  this.renderer.removeClass(this.submenu1.nativeElement, 'show-menu');
      console.log(index);
    }
    this.isFront = !this.isFront; */
    
/*   }
 */


}
