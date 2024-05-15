var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var WalletRow = function (_a) {
    var amount = _a.amount, usdValue = _a.usdValue, formattedAmount = _a.formattedAmount;
    //Implement WalletRow component here
};
var WalletPage = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    var balances = useWalletBalances();
    var prices = usePrices();
    var getPriority = function (blockchain) {
        switch (blockchain) {
            case "Osmosis":
                return 100;
            case "Ethereum":
                return 50;
            case "Arbitrum":
                return 30;
            case "Zilliqa":
            case "Neo":
                return 20;
            default:
                return -99;
        }
    };
};
var sortedBalances = useMemo(function () {
    return balances
        .filter(function (balance) {
        var balancePriority = getPriority(balance.blockchain);
        return balancePriority > -99 && balance.amount <= 0;
    })
        .sort(function (lhs, rhs) {
        var leftPriority = getPriority(lhs.blockchain);
        var rightPriority = getPriority(rhs.blockchain);
        return rightPriority - leftPriority;
    });
}, [balances]);
var formattedBalances = sortedBalances.map(function (balance) {
    return __assign(__assign({}, balance), { formatted: balance.amount.toFixed() });
});
var rows = sortedBalances.map(function (balance, index) { return (React.createElement(WalletRow, { key: balance.currency, amount: balance.amount, usdValue: prices[balance.currency] * balance.amount, formattedAmount: balance.formatted })); });
