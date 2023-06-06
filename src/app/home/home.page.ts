import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dark: boolean;
  constructor() {}
  // onScroll(event: Event) {
  //   console.log('onScroll');
  //   const objects = document.querySelectorAll('.object');
  //   const viewportHeight = window.innerHeight;
  //   objects.forEach((object: HTMLElement) => {
  //     const objectTop = object.getBoundingClientRect().top;
  //     if (objectTop < viewportHeight) {
  //       object.classList.add('visible');
  //     } else {
  //       object.classList.remove('visible');
  //     }
  //   });
  // }
  ionViewWillEnter() {
    let theme = localStorage.getItem('theme');
    if (theme == 'dark-theme') {
      this.dark = true;
    } else {
      this.dark = false;
    }
  }
  ngOnInit(): void {
    new Typed('#typed', {
      strings: ['Hello!'],
      typeSpeed: 300,
      startDelay: 1000,
      backSpeed: 100,
      backDelay: 500,
      loop: false,
      showCursor: false,
      cursorChar: '|',
      contentType: 'html',
    });
    new Typed('#typed2', {
      strings: ['Welcome to the Ocean Chats!'],
      typeSpeed: 100,
      startDelay: 1000,
      backSpeed: 100,
      backDelay: 500,
      loop: true,
      loopCount: 1,
      showCursor: false,
      cursorChar: '|',
      contentType: 'html',
    });
    new Typed('#typed3', {
      strings: [
        "Welcome to our social media platform! We're <br/> excited to connect you with friends, <br/> family, and the world around you. <br/> Our platform offers a wide range of <br/> features to help you stay connected and <br/> engaged with the people and <br/> communities that matter most <br/> to you. Whether you're looking to <br/> share your latest adventures, <br/> stay up to date on news and events, <br/> or just connect with others who share <br/> your interests, our platform has <br/> something for everyone. <br/> Join us today and start exploring <br/> all the ways you can connect, share, <br/> and grow with our social media community.",
      ],
      typeSpeed: 10,
      startDelay: 1000,
      backSpeed: 100,
      backDelay: 500,
      loop: true,
      loopCount: 1,
      showCursor: false,
      cursorChar: '|',
      contentType: 'html',
    });
  }
  setTheme(event) {
    this.dark = event;
  }
}
