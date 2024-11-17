import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.scss",
})
export class SkillsComponent {
  skillList: any[] = [
    {
      name: "Angular",
      icon: "/assets/Img/angular-logo.png",
    },
    { name: "React", icon: "/assets/Img/react-logo.png" },
    { name: "JavaScript", icon: "/assets/Img/js-logo.png" },
    { name: "TypeScript", icon: "/assets/Img/ts-logo.png" },
    { name: "Sass/Scss", icon: "/assets/Img/scss-logo.png" },
    { name: "RxJs", icon: "/assets/Img/rxjs-logo.png" },
    { name: "HTML5/CSS3 ", icon: "/assets/Img/html-logo.png" },
    { name: "MongoDB", icon: "/assets/Img/mongo-logo.png" },
    { name: "Redux", icon: "/assets/Img/redux-logo.png" },
    { name: "NgRx", icon: "/assets/Img/ngrx-logo.png" },
  ];
}
