class CurrenciesFormatter {
    constructor(nominal, currency) {
        try {
            if (typeof nominal !== "number") {
                throw new Error(
                    "The type of nominal parameter should be a number"
                );
            }

            if (typeof currency !== "string") {
                throw new Error(
                    "The type of currency parameter should be a strind"
                );
            }

            if (!this.#supportedCurr(currency)) {
                throw new Error(`Currency "${currency}" is not supported`);
            }

            this.nominal = nominal;
            this.currency = currency.toUpperCase();
        } catch (err) {
            console.error("err:", err.message);
        }
    }

    #supportedCurr(currency) {
        const currencies = {
            IDR: "Indonesian Rupiah",
        };

        return currency.toUpperCase() in currencies;
    }

    format() {
        if (this.currency === "IDR") {
            const currStr = String(this.nominal).split("");
            let j = 1;
            for (let i = currStr.length - 1; i >= 0; i--) {
                if (j === 3 && i !== 0) {
                    currStr.splice(i, 0, ".");
                    j = 0;
                }
                j++;
            }
            return `Rp${currStr.join("")}`;
        }
    }
}

export { CurrenciesFormatter };
