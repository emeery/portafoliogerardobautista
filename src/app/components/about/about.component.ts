import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
import { ModalComponent } from '../modal/modal.component';
import p5 from 'p5'
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
    /* const modalRef = this.modalService.open(ModalComponent, {windowClass:'dark-modal', size: 'lg', backdrop: 'static'});
    modalRef.result.then((r) => {
      if(r) {
        gsap.registerPlugin(TextPlugin, ScrollTrigger);
    
    gsap.to(`#title`, {
      duration: 3,
      color:'honeydew',
      fontSize: 50,
      yPercent: 0,
      stagger: 0.5,
      text: `EXPERIENCIA`,
      ease: `power2.in`
    });
      }
    }) */
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
      p5: p5
    })


  }
}
