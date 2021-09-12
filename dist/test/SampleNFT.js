"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var hardhat_1 = require("hardhat");
var ethereum_waffle_1 = require("ethereum-waffle");
var SampleNFT__factory_1 = require("../src/types/factories/SampleNFT__factory");
chai_1.use(ethereum_waffle_1.solidity);
describe("SampleNFT", function () { return __awaiter(void 0, void 0, void 0, function () {
    var signer, signer2, signer3, sampleNFT, name, symbol, deploySampleNFT;
    return __generator(this, function (_a) {
        name = "Another Sample NFT";
        symbol = "TEnft";
        beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, hardhat_1.ethers.getSigners()];
                    case 1:
                        _a = _b.sent(), signer = _a[0], signer2 = _a[1], signer3 = _a[2];
                        return [4 /*yield*/, deploySampleNFT()];
                    case 2:
                        sampleNFT = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        deploySampleNFT = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var sampleNFTFactory, sampleNFT;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sampleNFTFactory = new SampleNFT__factory_1.SampleNFT__factory(_signer || signer);
                        return [4 /*yield*/, sampleNFTFactory.deploy(name, symbol)];
                    case 1:
                        sampleNFT = _a.sent();
                        return [2 /*return*/, sampleNFT];
                }
            });
        }); };
        it("initialize contract correctly", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b, signer1Address, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = chai_1.expect;
                        return [4 /*yield*/, sampleNFT.name()];
                    case 1:
                        _a.apply(void 0, [_d.sent()]).to.equal("Another Sample NFT");
                        _b = chai_1.expect;
                        return [4 /*yield*/, sampleNFT.symbol()];
                    case 2:
                        _b.apply(void 0, [_d.sent()]).to.equal("TEnft");
                        return [4 /*yield*/, signer.getAddress()];
                    case 3:
                        signer1Address = _d.sent();
                        _c = chai_1.expect;
                        return [4 /*yield*/, sampleNFT.owner()];
                    case 4:
                        _c.apply(void 0, [_d.sent()]).to.equal(signer1Address);
                        return [2 /*return*/];
                }
            });
        }); });
        it("adding an operator", function () { return __awaiter(void 0, void 0, void 0, function () {
            var signer2Address, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, signer2.getAddress()];
                    case 1:
                        signer2Address = _b.sent();
                        return [4 /*yield*/, sampleNFT.addOperator(signer2Address)];
                    case 2:
                        _b.sent();
                        _a = chai_1.expect;
                        return [4 /*yield*/, sampleNFT.isOperator(signer2Address)];
                    case 3:
                        _a.apply(void 0, [_b.sent()]).to.equal(true);
                        return [2 /*return*/];
                }
            });
        }); });
        it("minting an NFT by operator", function () { return __awaiter(void 0, void 0, void 0, function () {
            var signer2Address, signer3Address, uri, sampleNFTAsSigner2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, signer2.getAddress()];
                    case 1:
                        signer2Address = _b.sent();
                        return [4 /*yield*/, signer3.getAddress()];
                    case 2:
                        signer3Address = _b.sent();
                        uri = "https:this.is.a.sample.uri";
                        return [4 /*yield*/, sampleNFT.addOperator(signer2Address)];
                    case 3:
                        _b.sent();
                        sampleNFTAsSigner2 = sampleNFT.connect(signer2);
                        return [4 /*yield*/, sampleNFTAsSigner2.mintToCaller(signer3Address, uri)];
                    case 4:
                        _b.sent();
                        _a = chai_1.expect;
                        return [4 /*yield*/, sampleNFT.balanceOf(signer3Address)];
                    case 5:
                        _a.apply(void 0, [_b.sent()]).to.equal(1);
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
