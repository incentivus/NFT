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
var mock_contract_1 = require("@ethereum-waffle/mock-contract");
var ethereum_waffle_1 = require("ethereum-waffle");
var Greeter__factory_1 = require("../src/types/factories/Greeter__factory");
var _a = require("./utils"), advanceBlockWithTime = _a.advanceBlockWithTime, takeSnapshot = _a.takeSnapshot, revertProvider = _a.revertProvider;
chai_1.use(ethereum_waffle_1.solidity);
describe("Greeting", function () { return __awaiter(void 0, void 0, void 0, function () {
    var signer, greeter, mockGreeter, deployGreeter;
    return __generator(this, function (_a) {
        beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
            var Greeter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ;
                        return [4 /*yield*/, hardhat_1.ethers.getSigners()];
                    case 1:
                        signer = (_a.sent())[0];
                        return [4 /*yield*/, hardhat_1.deployments.getArtifact("Greeter")];
                    case 2:
                        Greeter = _a.sent();
                        return [4 /*yield*/, mock_contract_1.deployMockContract(signer, Greeter.abi)];
                    case 3:
                        mockGreeter = _a.sent();
                        return [4 /*yield*/, deployGreeter()];
                    case 4:
                        greeter = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        deployGreeter = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var GreeterFactory, Greeter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        GreeterFactory = new Greeter__factory_1.Greeter__factory(_signer || signer);
                        return [4 /*yield*/, GreeterFactory.deploy(mockGreeter.address)];
                    case 1:
                        Greeter = _a.sent();
                        return [2 /*return*/, Greeter];
                }
            });
        }); };
        it("do/the/greeting/correct", function () { return __awaiter(void 0, void 0, void 0, function () {
            var signerAddress, snapshotId, _greeting, get_greeting;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, signer.getAddress()];
                    case 1:
                        signerAddress = _a.sent();
                        return [4 /*yield*/, takeSnapshot(signer.provider)];
                    case 2:
                        snapshotId = _a.sent();
                        _greeting = "changed";
                        return [4 /*yield*/, greeter.setGreeting(_greeting)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, greeter.greet()];
                    case 4:
                        get_greeting = _a.sent();
                        chai_1.expect(get_greeting).to.equal(_greeting);
                        return [4 /*yield*/, revertProvider(signer.provider, snapshotId)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
