class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }


  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.notAgeBrie(i) && this.notBackstagePasses(i)) {
        if (this.items[i].quality > 0) {
          if (notSulfuras(i)) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      }

      else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.notBackstagePasses(i)) {

            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }

            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }

          }
        }
      }


      if (this.items[i].sellIn < 0) {
        if (this.notAgeBrie(i)) {
          if (this.notBackstagePasses(i)) {
            if (this.items[i].quality > 0) {
              if (notSulfuras(i)) {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          }
          else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        }

        else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }

      }
    }

    return this.items;
  }


notAgeBrie(i){
  if (this.items[i].name != 'Aged Brie'){
    return true
  }
};

notBackstagePasses(i){
  if(this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'){
    return true
  }
};

notSulfuras(i){
  if(this.items[i].name != 'Sulfuras, Hand of Ragnaros'){
    return true
  }
};

qualityExist(i){
  if(this.items[i].quality > 0){
    return true
  }
};

};
