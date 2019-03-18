import { Component, OnInit } from '@angular/core';
import { FacultyListService } from './faculty-list.server';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit {

  faculties: any[] = [];

  constructor(private facultyListService: FacultyListService) { }

  ngOnInit() {
    this.facultyListService.getFaculties().subscribe((data: any[]) => {
      this.faculties = data;
    });
  }

}
