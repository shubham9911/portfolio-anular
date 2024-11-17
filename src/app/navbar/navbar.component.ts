import { Component, ElementRef, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  @Output() scrollToSectionEvent = new EventEmitter<string>();

  scrollToSection(section: string): void {
    this.scrollToSectionEvent.emit(section);
  }
}
