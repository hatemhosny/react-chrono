import { TimelineItemModel } from "./TimelineItemModel";

/**
 * model internally used by the component
 *
 * @export
 * @interface TimelineModel
 * @extends {TimelineProps}
 */
export interface TimelineModel extends TimelineProps {
  
  /**
   * active timeline item
   *
   * @type {number}
   * @memberof TimelineModel
   */
  activeTimelineItem: number;
  /**
   * invoked to jump timeline to the first item
   *
   * @memberof TimelineModel
   */
  onFirst: () => void;
  /**
   * invoked to jump timeline to the last item
   *
   * @memberof TimelineModel
   */
  onLast: () => void;
  /**
   * invoked to move to the next item on the list
   *
   * @memberof TimelineModel
   */
  onNext: () => void;
  /**
   * invoked to move the timeline to the previous item
   *
   * @memberof TimelineModel
   */
  onPrevious: () => void;
  onTimelineUpdated?: (id: number) => void;
  
  /**
   * indicates if a slideshow is activated
   *
   * @type {boolean}
   * @memberof TimelineModel
   */
  slideShowRunning?: boolean;
}

/**
 * Main props used by the host app.
 *
 * @export
 * @interface TimelineProps
 */
export interface TimelineProps {
  /**
   * disables keyboard navigation
   *
   * @type {boolean}
   * @memberof TimelineProps
   */
  disableNavOnKey?: boolean;
  itemWidth?: number;
  items: TimelineItemModel[];
  /**
   * sets the mode of timeline
   *
   * @type {TimelineMode}
   * @memberof TimelineProps
   */
  mode?: TimelineMode;
  slideItemDuration?: number;
  /**
   * enables slideshow
   *
   * @type {boolean}
   * @memberof TimelineProps
   */
  slideShow?: boolean;
  /**
   * sets the position of the title.
   *
   * @type {("TOP" | "BOTTOM" | "ALTERNATE")}
   * @memberof TimelineProps
   */
  titlePosition?: "TOP" | "BOTTOM" | "ALTERNATE";
  /**
   * sets the theme
   *
   * @type {{
   *     primary: string;
   *     secondary: string;
   *   }}
   * @memberof TimelineProps
   */
  theme?: {
    primary: string;
    secondary: string;
  }
}

export type TimelineMode = "VERTICAL" | "HORIZONTAL" | "TREE";