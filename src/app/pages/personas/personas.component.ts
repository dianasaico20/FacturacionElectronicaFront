import { Component,OnInit, ViewChild } from '@angular/core';
import { Personas } from './personas';
import { PersonasService } from './personas.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormpersonasComponent } from './formpersonas.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit{
  displayedColumns: string[] = ['id_persona','cedula', 'nombre_persona', 'apellido_persona', 'direccion_persona','telefono_persona','correo_persona','acciones'];
   
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource! : MatTableDataSource<Personas>;
  constructor(private personasService: PersonasService, public dialog: MatDialog ) { }
  personas: Personas []=[];
  ngOnInit(): void {
    this.cargarPersonas();
    
   }

   cargarPersonas(){
    this.personasService.getPersonas().subscribe(personas =>{
      this.personas=personas
      this.dataSource = new MatTableDataSource(this.personas);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    });
      
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarPersona(id_persona: number) {
    this.personasService.delete(id_persona).subscribe(
      res => this.personasService.getPersonas().subscribe(
        response => this.cargarPersonas()
      )
    );
    Swal.fire({
      title: 'Estas seguro de eliminar a la persona?',
      text: "No se podra revertir despues!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Persona eliminado', `La persona se a eliminado con éxito`,'error'
        )
      }
    })
  }

  openDialog(id_persona: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "55%";
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(FormpersonasComponent, dialogConfig);

    dialogRef.componentInstance.id_persona = id_persona;
    dialogRef.afterClosed().subscribe(result => {
      this.cargarPersonas()

    });
  }
}
