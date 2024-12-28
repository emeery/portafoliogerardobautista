import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import p5 from 'p5'

/* import { ModalComponent } from '../modal/modal.component'; */

declare var VANTA: any;

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private modalService: NgbModal) {

  }

  ngOnInit(): void {
    gsap.registerPlugin(TextPlugin, ScrollTrigger, SplitText);
    let mm = gsap.matchMedia();
    var split = new SplitText("#split", {type: "chars"});
    let chars = split.chars;
    // mobile
    mm.add("(max-width: 700px)", () => {
      gsap.from(chars, {
        y: 130,
        stagger: 0.02,
        ease: 'back.out',
        duration: 2,
        scrollTrigger: {
          trigger: 'split',
          start: 'top 40%'
        }
      })
      /* gsap.to(`#title`, {
        duration: 3,
        color:'honeydew',
        fontSize: 38,
        stagger: 0.5,
        text: `EXPERIENCIA`,
        ease: `power2.in`
      }); */

    
      return () => { // optional
        // custom cleanup code here (runs when it STOPS matching)
      };
    });
    // desktop
    mm.add("(min-width: 800px)", () => {
      gsap.from(chars, {
        duration: 1,
        autoAlpha: 0,
        stagger: 0.05,
        yPercent: 130
      })
      /* gsap.to(`#title`, {
        duration: 3,
        color:'honeydew',
        fontSize: 100,
        stagger: 0.5,
        text: `EXPERIENCIA`,
         ease: `power2.in`
      }); */
    });
    
  }
  ngAfterViewInit(): void {
    VANTA.TRUNK({
      el: '#vanta-exp',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      spacing: 10,
      chaos: 5,
      p5: p5
    })


  }
}
