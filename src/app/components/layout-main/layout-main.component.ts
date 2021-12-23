import { Component, OnInit } from '@angular/core';
import { ColumnsTableModel, SideBarButton } from '..';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss'],
})
export class LayoutMainComponent {
  constructor() {}

  buttons: SideBarButton[] = [
    { name: 'Alunos', route: 'alunos' },
    { name: 'Classes', route: 'classes' },
  ];

  data: any[] = [
    { id: '1', teste: 'Pedro' },
    { id: '2', teste: 'Paulo' },
  ];

  columns: ColumnsTableModel[] = [
    { name: 'id', displayedName: 'id', sort: false },
    { name: 'teste', displayedName: 'nome', sort: true },
  ];

  selected(event: any) {
    console.log(event);
  }
}
