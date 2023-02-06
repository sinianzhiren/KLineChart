/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Pane from '../pane/Pane'

import { WidgetNameConstants } from './Widget'
import DrawWidget from './DrawWidget'

import XAxis from '../component/XAxis'

import XAxisView from '../view/XAxisView'
import OverlayXAxisView from '../view/OverlayXAxisView'
import CrosshairVerticalLabelView from '../view/CrosshairVerticalLabelView'

export default class XAxisWidget extends DrawWidget<XAxis> {
  private readonly _xAxisView = new XAxisView(this)
  private readonly _overlayXAxisView = new OverlayXAxisView(this)
  private readonly _crosshairVerticalLabelView = new CrosshairVerticalLabelView(this)

  constructor (rootContainer: HTMLElement, pane: Pane<XAxis>) {
    super(rootContainer, pane)
    this.getContainer().style.cursor = 'ew-resize'
    this.addChild(this._overlayXAxisView)
  }

  getName (): string {
    return WidgetNameConstants.XAXIS
  }

  protected updateMain (ctx: CanvasRenderingContext2D): void {
    this._xAxisView.draw(ctx)
  }

  protected updateOverlay (ctx: CanvasRenderingContext2D): void {
    this._overlayXAxisView.draw(ctx)
    this._crosshairVerticalLabelView.draw(ctx)
  }
}
