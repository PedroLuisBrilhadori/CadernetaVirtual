import { Component, OnInit } from '@angular/core';
import { ColumnsTableModel, SideBarButton } from '..';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  styleUrls: ['./layout-main.component.scss'],
})
export class LayoutMainComponent {
  buttons: SideBarButton[] = [
    { name: 'Alunos', route: 'alunos' },
    { name: 'Classes', route: 'classes' },
  ];

  constructor() {}
}
