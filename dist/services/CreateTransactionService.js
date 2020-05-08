"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateTransactionService = /** @class */ (function () {
    function CreateTransactionService(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    CreateTransactionService.prototype.execute = function (_a) {
        // TODO
        var title = _a.title, value = _a.value, type = _a.type;
        // valor é maior ou nao?
        var total = this.transactionsRepository.getBalance().total;
        if (type === 'outcome' && total < value) {
            throw new Error(' You do not have enough balance');
        }
        var transaction = this.transactionsRepository.create({
            title: title,
            value: value,
            type: type,
        });
        return transaction;
    };
    return CreateTransactionService;
}());
exports.default = CreateTransactionService;
