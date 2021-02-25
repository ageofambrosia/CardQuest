import {AchievementId} from "@/ig-template/features/achievements/AchievementId";
import {Requirement} from "@/ig-template/tools/requirements/Requirement";
import {Progress} from "@/ig-template/tools/requirements/Progress";

export class Achievement {
    public key: AchievementId;
    public title: string;
    public description: string;
    public requirement: Requirement;

    public unlocked: boolean

    constructor(key: AchievementId, title: string, description: string, requirement: Requirement) {
        this.key = key;
        this.title = title;
        this.description = description;
        this.requirement = requirement;
        this.unlocked = false
    }

    /**
     * Unlock this achievement if possible.
     * Returns true if the achievement was just unlocked!
     */
    unlock(): boolean {
        if (!this.unlocked) {
            this.unlocked = true;
            return true;
        }
        return false;
    }

    requirementsCompleted(): boolean {
        return this.requirement.isCompleted;
    }

    getProgress(): Progress {
        return this.requirement.progress;
    }

    public isUnlocked(): boolean {
        return this.requirement.isCompleted;
    }

}
