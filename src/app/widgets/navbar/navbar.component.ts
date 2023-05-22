import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.src = 'assets/navbar.js';
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    this.renderer.appendChild(document.head, script);
  }
}
