import {Game} from "./ig-template/Game";
import {Wallet} from "@/ig-template/features/wallet/Wallet";
import {CurrencyType} from "@/ig-template/features/wallet/CurrencyType";
import {Settings} from "@/ig-template/features/settings/Settings";
import {Statistics} from "@/ig-template/features/statistics/Statistics";
import {CardId} from "@/card-quest/cards/CardId";
import {CardCollection} from "@/card-quest/features/card-collection/CardCollection";
import {CardPack} from "@/card-quest/features/card-collection/CardPack";
import {CardPackId} from "@/card-quest/features/card-collection/CardPackId";
import {Outcome} from "@/ig-template/tools/probability/Outcome";
import {EmptyAdventure} from "@/card-quest/adventure/EmptyAdventure";

export class App {

    static game: Game;

    static start(): void {

        this.game = this.getDefaultGame();
        this.game.initialize();
        this.game.load();
        this.game.start();
    }


    public static getDefaultGame(): Game {
        return new Game(
            {
                wallet: new Wallet([
                    CurrencyType.Money,
                    CurrencyType.Souls,
                    CurrencyType.Wood,
                    CurrencyType.Bronze,
                    CurrencyType.Silver,
                    CurrencyType.Gold,
                ]),
                settings: new Settings(),
                statistics: new Statistics(),
                adventure: new EmptyAdventure(),
                collection: new CardCollection([
                    new CardPack(CardPackId.ExamplePack, [
                        new Outcome<CardId>(CardId.WoodCard, 1),
                        new Outcome<CardId>(CardId.MagicTouch, 1),
                        new Outcome<CardId>(CardId.EnemyCard, 1),
                        new Outcome<CardId>(CardId.BronzeAxe, 1),
                    ])
                ]),
            }
        );
    }
}
