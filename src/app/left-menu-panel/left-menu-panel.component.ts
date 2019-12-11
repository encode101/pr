import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-left-menu-panel',
  templateUrl: './left-menu-panel.component.html',
  styleUrls: ['./left-menu-panel.component.scss'],
})
export class LeftMenuPanelComponent implements OnInit {

  constructor(private menu: MenuController) { }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  ngOnInit() {

  }

}
