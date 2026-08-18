export class Helper {
    static convertPriceToNumber(price: string): number {
        const cleaned = price.replace(/[^0-9.]/g, '');
        return parseFloat(cleaned);
    }

    static getProductDetails() {
        return {
            productName: "MacBook",
            productQuantity: "1",
            totalPrice: "$602.00"
        };
    }

    static getLoginDetails() {
        return {
            email: process.env.APP_EMAIL || "prathamesh.moreqa@gmail.com",
            password: process.env.APP_PASSWORD || "Password1"
        };
    }
}