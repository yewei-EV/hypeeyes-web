import { Component, OnInit } from '@angular/core';
import { Category, TopicListInfo } from '../../shared/models';
import { CategoryService } from '../../entities/category/category.service';
import { Constant } from '../../shared';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SliderData } from '../../components/sliders/default-slider/default-slider.component';
import { TopicService } from '../../entities/topic/topic.service';

class Info {
  categories: Category[] = [];
  topicListInfo: TopicListInfo;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  infoList: Info[] = [];
  categoriesForCard: Category[] = [];
  sliderConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    initialSlide: 2,
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
  mouseIndex: number;

  constructor(private categoryService: CategoryService, private topicService: TopicService) { }

  private async getCategoryList() {
    const categoryNameLists = [
      ['潮目秘籍', '线上抢购', '线下购买', '鉴定教学'],
      ['潮流百科', '人物', '品牌'],
      ['美图细赏', '球鞋', '潮服', '上身驾驭'],
    ];
    // const sliderTopicLists = [6];
    for (const categoryNameList of categoryNameLists) {
      const info = new Info();
      for (const name of categoryNameList) {
        const category = new Category();
        category.name = name;
        info.categories.push(category);
        if (Constant.topicListInfoMap.has(name)) {
          info.topicListInfo = Constant.topicListInfoMap.get(name);
          info.topicListInfo.showTitle = true;
        }
      }
      this.infoList.push(info);
    }
    const categories = await this.categoryService.getAllCategories().toPromise();
    let categoryId;
    for (const category of categories) {
      if (category.name === '潮目社区') {
        categoryId = category.cid;
      }
      if (category.name === '首页置顶') {
        await this.getSliderData(category.cid);
      }
    }
    // await this.getSliderData(sliderTopicLists);
    for (const category of categories) {
      if (categoryId === category.cid) {

        this.categoriesForCard = this.categoriesForCard.concat(category);
      }
      if (categoryId === category.parentCid && category.name !== '精选') {
        this.categoriesForCard.push(category);
      }
      for (const [index, categoryNameList] of categoryNameLists.entries()) {
        const nameIndex = categoryNameList.indexOf(category.name);
        if (nameIndex >= 0) {
          this.infoList[index].categories[nameIndex] = category;
          break;
        }
      }
    }
  }

  private async getSliderData(cid: number) {
    const topics = await this.categoryService.getTopicsWithMainPostInfoByCid(cid, 0, 7, 'newest_to_oldest').toPromise();
    for (const topic of topics) {
      const sliderData = new SliderData();
      sliderData.imageUrl = topic.firstImg;
      sliderData.url = '/topic/' + topic.tid + '/';
      this.sliderDataArray.push(sliderData);
    }
  }

  // private async getSliderData(cids: number[]) {
  //   const topics = await this.topicService.getByIds(cids).toPromise();
  //   for (const topic of topics) {
  //     const sliderData = new SliderData();
  //     sliderData.imageUrl = topic.firstImg;
  //     sliderData.url = '/topic/' + topic.tid + '/';
  //     this.sliderDataArray.push(sliderData);
  //   }
  // }

  private async getData() {
    await this.getCategoryList();
  }

  ngOnInit() {
    this.getData().then();
  }

}
