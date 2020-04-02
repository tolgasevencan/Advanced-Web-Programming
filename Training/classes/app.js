class Rectangle {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
};

/* Sınıf tanımları ve fonksiyon tanımları arasındaki önemli bir fark, 
fonksiyonlara tanımlandığı satırdan önce erişim sağlanabilir. 
Sınıflara tanımlandığı satırdan önce  erişilemezler. 
Önce sınıfları tanımlamanız ve ardından ona erişmeniz gerekir.  
Aksi halde aşağıdakine benzer bir hatayla karşılaşırsınız. ReferenceError:
*/

// Prototype Methods
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
};



// Statik Methods
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a,b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
};

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));