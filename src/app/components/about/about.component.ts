import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import p5 from 'p5'
// declare var $:any;
/* import { ModalComponent } from '../modal/modal.component'; */

declare var VANTA: any;

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, AfterViewInit {
  smoother: ScrollSmoother;
  @ViewChild('wrapper') wrapperEl: ElementRef<HTMLElement>;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    // private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    gsap.registerPlugin(TextPlugin, ScrollTrigger, SplitText, ScrollSmoother);
    let mm = gsap.matchMedia();
    var splitTitle = new SplitText("#split", {type: "chars"});
    let chars = splitTitle.chars;

    var mySplitText = new SplitText("#quote", { type: "words,chars" });
    var arrayText = []
    arrayText.push(mySplitText.chars)
    arrayText.forEach((char, i) => {
      const bg = "#F1F1F1";
      const fg = "#0F0E1A";
      const text = new SplitText(char, { types: "chars" });
    
      gsap.fromTo(
        text.chars,
        {
          color: fg,
        },
        {
          
          color: bg,
          duration: 1,
          stagger: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: char,
            start: "top 60%",
            end: "top 25%",
            scrub: true,
            markers: false,

          }
        }
      );
    });
   
    // mobile
    mm.add("(max-width: 700px)", () => {
      // gsap.set('#split', {perspective: 400})
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
   /*  this.smoother = ScrollSmoother.create({
      content: '#smooth-content',
      wrapper: 'app-about',
      smooth: 2,
    }); */

     


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
