import { Component, ElementRef, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { SkillsComponent } from "./skills/skills.component";
import { CommonModule } from "@angular/common";
import { ExperienceComponent } from "./experience/experience.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    IntroductionComponent,
    SkillsComponent,
    ExperienceComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "portfolio";

  @ViewChild("introduction", { read: ElementRef }) introduction!: ElementRef;
  @ViewChild("skills", { read: ElementRef }) skills!: ElementRef;
  @ViewChild("experience", { read: ElementRef }) experience!: ElementRef;
  @ViewChild("about", { read: ElementRef }) about!: ElementRef;
  @ViewChild("projects", { read: ElementRef }) projects!: ElementRef;
  @ViewChild("contact", { read: ElementRef }) contact!: ElementRef;

  private sectionRefs: { [key: string]: ElementRef } = {};

  ngAfterViewInit(): void {
    // Store references for easier access
    this.sectionRefs = {
      introduction: this.introduction,
      skills: this.skills,
      experience: this.experience,
      about: this.about,
      projects: this.projects,
      contact: this.contact,
    };
  }

  scrollTo(section: string): void {
    const element = this.sectionRefs[section]?.nativeElement;
    console.log(section, this.sectionRefs[section].nativeElement);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.error(`Section ${section} not found.`);
    }
  }
}
