import {Addon} from "./Addon";
/**
 * Represents a group of addons with specific properties and constraints.
 */
export interface AddonGroup {
    /**
     * The name of the addon group.
     */
    name: string;

    /**
     * The maximum number of addons that can be selected from this group.
     */
    limit: number;

    /**
     * The order in which this addon group should be sorted.
     */
    sortOrder: number;

    /**
     * An array of product IDs that reference this addon group.
     */
    refProductIds: string[];

    /**
     * An array of addons within this group, each with its own properties and constraints.
     */
    addons: {
        /**
         * The addon associated with this entry.
         */
        addon: Addon;

        /**
         * The maximum number of times this addon can be selected.
         */
        limit: number;

        /**
         * The order in which this addon should be sorted within the group.
         */
        sortOrder: number;
    }[];
}
