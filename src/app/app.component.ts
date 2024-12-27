import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import ScrollSmoother from 'gsap-trial/dist/ScrollSmoother';
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit  {
  smoother: ScrollSmoother;
  @ViewChild('wrapper') wrapperEl: ElementRef<HTMLElement>;
  @ViewChild('toTopBtn') toTopBtnEL: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('ScrollSmoother=>', ScrollSmoother);
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
    this.smoother = ScrollSmoother.create({
      content: '#smooth-content',
      wrapper: 'app-root',
      smooth: 2,
    });
  }

  @HostListener('window:scroll')
  scrollHandler() {
    if (window.scrollY > 50) {
      gsap.to(this.toTopBtnEL.nativeElement, {
        duration: 0.3,
        opacity: 1,
        display: 'block',
        scale: 1,
      });
    } else {
      gsap.to(this.toTopBtnEL.nativeElement, {
        duration: 0.3,
        opacity: 0,
        display: 'none',
        scale: 0,
      });
    }
  }

  public toTop() {
    this.smoother.scrollTo(this.wrapperEl.nativeElement, true);
  }
}
