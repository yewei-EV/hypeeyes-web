import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, TopicListInfo } from '../../shared/models';
import { CategoryService } from '../../entities/category/category.service';
import { Constant } from '../../shared';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SliderData } from '../../components/sliders/default-slider/default-slider.component';

@Component({
  selector: 'app-ugc-mobile-page',
  templateUrl: './ugc-mobile-page.component.html',
  styleUrls: ['./ugc-mobile-page.component.scss']
})
export class UgcMobilePageComponent implements OnInit {

  categories: Category[] = [];
  topicListInfo: TopicListInfo;
  linePerPage = 3;
  // swiper
  sliderConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    initialSlide: 0,
    slidesPerView: 'auto',
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: true,
    effect: 'slide',
    spaceBetween: 20,
    observer: true,
    centeredSlides: true,
    observeParents: true,
    speed: 1000,
  };
  sliderDataArray: SliderData[] = [];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getSliderData(14).then();
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.getAllCategories().subscribe(categories => {
      for (const category of categories) {
        if (category.cid === id) {
          this.topicListInfo = Constant.topicListInfoMap.get(category.name);
          this.topicListInfo.showTitle = false;
          this.topicListInfo.line = this.linePerPage;
          delete this.topicListInfo.maxItems;
        }
        if (category.cid === id || category.parentCid === id) {
          this.categories.push(category);
        }
      }
    });
  }

  private async getSliderData(cid: number) {
    const tid = [176, 248];
    const topics = await this.categoryService.getTopicsWithMainPostInfoByCid(cid, 0, 7, 'newest_to_oldest').toPromise();
    for (const topic of topics) {
      const sliderData = new SliderData();
      sliderData.imageUrl = topic.firstImg;
      sliderData.url = '/topic/' + tid.pop() + '/';
      this.sliderDataArray.push(sliderData);
    }
  }
}
