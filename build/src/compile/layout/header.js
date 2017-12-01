"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fielddef_1 = require("../../fielddef");
var util_1 = require("../../util");
var common_1 = require("../common");
exports.HEADER_CHANNELS = ['row', 'column'];
exports.HEADER_TYPES = ['header', 'footer'];
function getHeaderType(orient) {
    if (orient === 'top' || orient === 'left') {
        return 'header';
    }
    return 'footer';
}
exports.getHeaderType = getHeaderType;
function getTitleGroup(model, channel) {
    var title = model.component.layoutHeaders[channel].title;
    var textOrient = channel === 'row' ? 'vertical' : undefined;
    var update = __assign({ align: { value: 'center' }, text: { value: title } }, (textOrient === 'vertical' ? { angle: { value: 270 } } : {}));
    return {
        name: model.getName(channel + "_title"),
        role: channel + "-title",
        type: 'group',
        marks: [__assign({ type: 'text', role: channel + "-title-text", style: 'guide-title' }, (util_1.keys(update).length > 0 ? { encode: { update: update } } : {}))]
    };
}
exports.getTitleGroup = getTitleGroup;
function getHeaderGroup(model, channel, headerType, layoutHeader, headerCmpt) {
    if (headerCmpt) {
        var title = null;
        if (layoutHeader.facetFieldDef && headerCmpt.labels) {
            var facetFieldDef = layoutHeader.facetFieldDef;
            var _a = facetFieldDef.header, header = _a === void 0 ? {} : _a;
            var format = header.format, labelAngle = header.labelAngle;
            var update = __assign({}, (labelAngle ? { angle: { value: labelAngle } } :
                // Default align / baseline for row (only apply if there is no custom labelAngle specified)
                channel === 'row' ? {
                    align: { value: 'right' },
                    baseline: { value: 'middle' }
                } :
                    {})
            // TODO(https://github.com/vega/vega-lite/issues/2446): apply label* (e.g, labelAlign, labelBaseline) here
            );
            title = __assign({ text: common_1.formatSignalRef(facetFieldDef, format, 'parent', model.config), offset: 10, orient: channel === 'row' ? 'left' : 'top', style: 'guide-label' }, (util_1.keys(update).length > 0 ? { encode: { update: update } } : {}));
        }
        var axes = headerCmpt.axes;
        var hasAxes = axes && axes.length > 0;
        if (title || hasAxes) {
            var sizeChannel = channel === 'row' ? 'height' : 'width';
            return __assign({ name: model.getName(channel + "_" + headerType), type: 'group', role: channel + "-" + headerType }, (layoutHeader.facetFieldDef ? {
                from: { data: model.getName(channel + '_domain') },
                sort: {
                    field: fielddef_1.field(layoutHeader.facetFieldDef, { expr: 'datum' }),
                    order: (layoutHeader.facetFieldDef.header && layoutHeader.facetFieldDef.sort) || 'ascending'
                }
            } : {}), (title ? { title: title } : {}), (headerCmpt.sizeSignal ? {
                encode: {
                    update: (_b = {},
                        _b[sizeChannel] = headerCmpt.sizeSignal,
                        _b)
                }
            } : {}), (hasAxes ? { axes: axes } : {}));
        }
    }
    return null;
    var _b;
}
exports.getHeaderGroup = getHeaderGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBpbGUvbGF5b3V0L2hlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsMkNBQXFDO0FBQ3JDLG1DQUFnQztBQUVoQyxvQ0FBMEM7QUFJN0IsUUFBQSxlQUFlLEdBQW9CLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBR3JELFFBQUEsWUFBWSxHQUFpQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQXdDL0QsdUJBQThCLE1BQWtCO0lBQzlDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBTEQsc0NBS0M7QUFFRCx1QkFBOEIsS0FBWSxFQUFFLE9BQXNCO0lBQ2hFLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMzRCxJQUFNLFVBQVUsR0FBRyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUU5RCxJQUFNLE1BQU0sY0FDVixLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLEVBQ3hCLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsSUFDakIsQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUMsRUFBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FHM0QsQ0FBQztJQUVGLE1BQU0sQ0FBQztRQUNMLElBQUksRUFBRyxLQUFLLENBQUMsT0FBTyxDQUFJLE9BQU8sV0FBUSxDQUFDO1FBQ3hDLElBQUksRUFBSyxPQUFPLFdBQVE7UUFDeEIsSUFBSSxFQUFFLE9BQU87UUFDYixLQUFLLEVBQUUsWUFDTCxJQUFJLEVBQUUsTUFBTSxFQUNaLElBQUksRUFBSyxPQUFPLGdCQUFhLEVBQzdCLEtBQUssRUFBRSxhQUFhLElBQ2pCLENBQUMsV0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUMsTUFBTSxRQUFBLEVBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDdEQ7S0FDSCxDQUFDO0FBQ0osQ0FBQztBQXZCRCxzQ0F1QkM7QUFFRCx3QkFBK0IsS0FBWSxFQUFFLE9BQXNCLEVBQUUsVUFBc0IsRUFBRSxZQUFtQyxFQUFFLFVBQTJCO0lBQzNKLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFBLDBDQUFhLENBQWlCO1lBQzlCLElBQUEseUJBQVcsRUFBWCxnQ0FBVyxDQUFrQjtZQUM3QixJQUFBLHNCQUFNLEVBQUUsOEJBQVUsQ0FBVztZQUVwQyxJQUFNLE1BQU0sZ0JBQ1AsQ0FDRCxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBQyxFQUFDLENBQUMsQ0FBQztnQkFDM0MsMkZBQTJGO2dCQUMzRixPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQztvQkFDdkIsUUFBUSxFQUFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQztpQkFDNUIsQ0FBQyxDQUFDO29CQUNILEVBQUUsQ0FDSDtZQUVELDBHQUEwRzthQUMzRyxDQUFDO1lBRUYsS0FBSyxjQUNILElBQUksRUFBRSx3QkFBZSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFDcEUsTUFBTSxFQUFFLEVBQUUsRUFDVixNQUFNLEVBQUUsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQzFDLEtBQUssRUFBRSxhQUFhLElBQ2pCLENBQUMsV0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUMsTUFBTSxRQUFBLEVBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDdkQsQ0FBQztRQUNKLENBQUM7UUFFRCxJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBRTdCLElBQU0sT0FBTyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFNLFdBQVcsR0FBRyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUUzRCxNQUFNLFlBQ0osSUFBSSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUksT0FBTyxTQUFJLFVBQVksQ0FBQyxFQUMvQyxJQUFJLEVBQUUsT0FBTyxFQUNiLElBQUksRUFBSyxPQUFPLFNBQUksVUFBWSxJQUM3QixDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEVBQUM7Z0JBQ2hELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsZ0JBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDO29CQUN6RCxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVc7aUJBQzdGO2FBQ0YsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ0osQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3RCLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sRUFBRTtvQkFDTixNQUFNO3dCQUNKLEdBQUMsV0FBVyxJQUFHLFVBQVUsQ0FBQyxVQUFVOzJCQUNyQztpQkFDRjthQUNGLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUNILENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUMxQjtRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQzs7QUFDZCxDQUFDO0FBN0RELHdDQTZEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXRpbGl0eSBmb3IgZ2VuZXJhdGluZyByb3cgLyBjb2x1bW4gaGVhZGVyc1xuICovXG5pbXBvcnQge0ZhY2V0RmllbGREZWZ9IGZyb20gJy4uLy4uL2ZhY2V0JztcbmltcG9ydCB7ZmllbGR9IGZyb20gJy4uLy4uL2ZpZWxkZGVmJztcbmltcG9ydCB7a2V5c30gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQge0F4aXNPcmllbnQsIFZnQXhpc30gZnJvbSAnLi4vLi4vdmVnYS5zY2hlbWEnO1xuaW1wb3J0IHtmb3JtYXRTaWduYWxSZWZ9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQge01vZGVsfSBmcm9tICcuLi9tb2RlbCc7XG5cbmV4cG9ydCB0eXBlIEhlYWRlckNoYW5uZWwgPSAncm93JyB8ICdjb2x1bW4nO1xuZXhwb3J0IGNvbnN0IEhFQURFUl9DSEFOTkVMUzogSGVhZGVyQ2hhbm5lbFtdID0gWydyb3cnLCAnY29sdW1uJ107XG5cbmV4cG9ydCB0eXBlIEhlYWRlclR5cGUgPSAnaGVhZGVyJyB8ICdmb290ZXInO1xuZXhwb3J0IGNvbnN0IEhFQURFUl9UWVBFUzogSGVhZGVyVHlwZVtdID0gWydoZWFkZXInLCAnZm9vdGVyJ107XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCByZXByZXNlbnRzIGFsbCBoZWFkZXIsIGZvb3RlcnMgYW5kIHRpdGxlIG9mIGEgVmVnYSBncm91cCB3aXRoIGxheW91dCBkaXJlY3RpdmUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0SGVhZGVyQ29tcG9uZW50IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLy8gVE9ETzogcmVwZWF0IGFuZCBjb25jYXQgY2FuIGhhdmUgbXVsdGlwbGUgaGVhZGVyIC8gZm9vdGVyLlxuICAvLyBOZWVkIHRvIHJlZGVzaWduIHRoaXMgcGFydCBhIGJpdC5cblxuICBmYWNldEZpZWxkRGVmPzogRmFjZXRGaWVsZERlZjxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBoZWFkZXIgY29tcG9uZW50cyBmb3IgaGVhZGVycy5cbiAgICogRm9yIGZhY2V0LCB0aGVyZSBzaG91bGQgYmUgb25seSBvbmUgaGVhZGVyIGNvbXBvbmVudCwgd2hpY2ggaXMgZGF0YS1kcml2ZW4uXG4gICAqIEZvciByZXBlYXQgYW5kIGNvbmNhdCwgdGhlcmUgY2FuIGJlIG11bHRpcGxlIGhlYWRlciBjb21wb25lbnRzIHRoYXQgZXhwbGljaXRseSBsaXN0IGRpZmZlcmVudCBheGVzLlxuICAgKi9cbiAgaGVhZGVyPzogSGVhZGVyQ29tcG9uZW50W107XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGhlYWRlciBjb21wb25lbnRzIGZvciBmb290ZXJzLlxuICAgKiBGb3IgZmFjZXQsIHRoZXJlIHNob3VsZCBiZSBvbmx5IG9uZSBoZWFkZXIgY29tcG9uZW50LCB3aGljaCBpcyBkYXRhLWRyaXZlbi5cbiAgICogRm9yIHJlcGVhdCBhbmQgY29uY2F0LCB0aGVyZSBjYW4gYmUgbXVsdGlwbGUgaGVhZGVyIGNvbXBvbmVudHMgdGhhdCBleHBsaWNpdGx5IGxpc3QgZGlmZmVyZW50IGF4ZXMuXG4gICAqL1xuICBmb290ZXI/OiBIZWFkZXJDb21wb25lbnRbXTtcbn1cblxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0IHJlcHJlc2VudHMgb25lIGdyb3VwIG9mIHJvdy9jb2x1bW4taGVhZGVyL2Zvb3Rlci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJDb21wb25lbnQge1xuXG4gIGxhYmVsczogYm9vbGVhbjtcblxuICBzaXplU2lnbmFsOiB7c2lnbmFsOiBzdHJpbmd9O1xuXG4gIGF4ZXM6IFZnQXhpc1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGVhZGVyVHlwZShvcmllbnQ6IEF4aXNPcmllbnQpIHtcbiAgaWYgKG9yaWVudCA9PT0gJ3RvcCcgfHwgb3JpZW50ID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gJ2hlYWRlcic7XG4gIH1cbiAgcmV0dXJuICdmb290ZXInO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGl0bGVHcm91cChtb2RlbDogTW9kZWwsIGNoYW5uZWw6IEhlYWRlckNoYW5uZWwpIHtcbiAgY29uc3QgdGl0bGUgPSBtb2RlbC5jb21wb25lbnQubGF5b3V0SGVhZGVyc1tjaGFubmVsXS50aXRsZTtcbiAgY29uc3QgdGV4dE9yaWVudCA9IGNoYW5uZWwgPT09ICdyb3cnID8gJ3ZlcnRpY2FsJyA6IHVuZGVmaW5lZDtcblxuICBjb25zdCB1cGRhdGUgPSB7XG4gICAgYWxpZ246IHt2YWx1ZTogJ2NlbnRlcid9LFxuICAgIHRleHQ6IHt2YWx1ZTogdGl0bGV9LFxuICAgIC4uLih0ZXh0T3JpZW50ID09PSAndmVydGljYWwnID8ge2FuZ2xlOiB7dmFsdWU6IDI3MH19OiB7fSksXG4gICAgLy8gVE9ETypodHRwczovL2dpdGh1Yi5jb20vdmVnYS92ZWdhLWxpdGUvaXNzdWVzLzI0NDYpOiBhZGQgdGl0bGUqIHByb3BlcnRpZXMgKGUuZy4sIHRpdGxlQWxpZ24pXG4gICAgLy8gYWxzbyBtYWtlIHN1cmUgdGhhdCBndWlkZS10aXRsZSBjb25maWcgb3ZlcnJpZGUgdGhlc2UgVmVnYS1saXRlIGRlZmF1bHRcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICBtb2RlbC5nZXROYW1lKGAke2NoYW5uZWx9X3RpdGxlYCksXG4gICAgcm9sZTogYCR7Y2hhbm5lbH0tdGl0bGVgLFxuICAgIHR5cGU6ICdncm91cCcsXG4gICAgbWFya3M6IFt7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICByb2xlOiBgJHtjaGFubmVsfS10aXRsZS10ZXh0YCxcbiAgICAgIHN0eWxlOiAnZ3VpZGUtdGl0bGUnLFxuICAgICAgLi4uKGtleXModXBkYXRlKS5sZW5ndGggPiAwID8ge2VuY29kZToge3VwZGF0ZX19IDoge30pXG4gICAgfV1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhlYWRlckdyb3VwKG1vZGVsOiBNb2RlbCwgY2hhbm5lbDogSGVhZGVyQ2hhbm5lbCwgaGVhZGVyVHlwZTogSGVhZGVyVHlwZSwgbGF5b3V0SGVhZGVyOiBMYXlvdXRIZWFkZXJDb21wb25lbnQsIGhlYWRlckNtcHQ6IEhlYWRlckNvbXBvbmVudCkge1xuICBpZiAoaGVhZGVyQ21wdCkge1xuICAgIGxldCB0aXRsZSA9IG51bGw7XG4gICAgaWYgKGxheW91dEhlYWRlci5mYWNldEZpZWxkRGVmICYmIGhlYWRlckNtcHQubGFiZWxzKSB7XG4gICAgICBjb25zdCB7ZmFjZXRGaWVsZERlZn0gPSBsYXlvdXRIZWFkZXI7XG4gICAgICBjb25zdCB7aGVhZGVyID0ge319ID0gZmFjZXRGaWVsZERlZjtcbiAgICAgIGNvbnN0IHtmb3JtYXQsIGxhYmVsQW5nbGV9ID0gaGVhZGVyO1xuXG4gICAgICBjb25zdCB1cGRhdGUgPSB7XG4gICAgICAgIC4uLihcbiAgICAgICAgICBsYWJlbEFuZ2xlID8ge2FuZ2xlOiB7dmFsdWU6IGxhYmVsQW5nbGV9fSA6XG4gICAgICAgICAgLy8gRGVmYXVsdCBhbGlnbiAvIGJhc2VsaW5lIGZvciByb3cgKG9ubHkgYXBwbHkgaWYgdGhlcmUgaXMgbm8gY3VzdG9tIGxhYmVsQW5nbGUgc3BlY2lmaWVkKVxuICAgICAgICAgIGNoYW5uZWwgPT09ICdyb3cnID8ge1xuICAgICAgICAgICAgYWxpZ246IHt2YWx1ZTogJ3JpZ2h0J30sXG4gICAgICAgICAgICBiYXNlbGluZToge3ZhbHVlOiAnbWlkZGxlJ31cbiAgICAgICAgICB9IDpcbiAgICAgICAgICB7fVxuICAgICAgICApXG5cbiAgICAgICAgLy8gVE9ETyhodHRwczovL2dpdGh1Yi5jb20vdmVnYS92ZWdhLWxpdGUvaXNzdWVzLzI0NDYpOiBhcHBseSBsYWJlbCogKGUuZywgbGFiZWxBbGlnbiwgbGFiZWxCYXNlbGluZSkgaGVyZVxuICAgICAgfTtcblxuICAgICAgdGl0bGUgPSB7XG4gICAgICAgIHRleHQ6IGZvcm1hdFNpZ25hbFJlZihmYWNldEZpZWxkRGVmLCBmb3JtYXQsICdwYXJlbnQnLCBtb2RlbC5jb25maWcpLFxuICAgICAgICBvZmZzZXQ6IDEwLFxuICAgICAgICBvcmllbnQ6IGNoYW5uZWwgPT09ICdyb3cnID8gJ2xlZnQnIDogJ3RvcCcsXG4gICAgICAgIHN0eWxlOiAnZ3VpZGUtbGFiZWwnLFxuICAgICAgICAuLi4oa2V5cyh1cGRhdGUpLmxlbmd0aCA+IDAgPyB7ZW5jb2RlOiB7dXBkYXRlfX0gOiB7fSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgYXhlcyA9IGhlYWRlckNtcHQuYXhlcztcblxuICAgIGNvbnN0IGhhc0F4ZXMgPSBheGVzICYmIGF4ZXMubGVuZ3RoID4gMDtcbiAgICBpZiAodGl0bGUgfHwgaGFzQXhlcykge1xuICAgICAgY29uc3Qgc2l6ZUNoYW5uZWwgPSBjaGFubmVsID09PSAncm93JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbW9kZWwuZ2V0TmFtZShgJHtjaGFubmVsfV8ke2hlYWRlclR5cGV9YCksXG4gICAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICAgIHJvbGU6IGAke2NoYW5uZWx9LSR7aGVhZGVyVHlwZX1gLFxuICAgICAgICAuLi4obGF5b3V0SGVhZGVyLmZhY2V0RmllbGREZWYgPyB7XG4gICAgICAgICAgZnJvbToge2RhdGE6IG1vZGVsLmdldE5hbWUoY2hhbm5lbCArICdfZG9tYWluJyl9LFxuICAgICAgICAgIHNvcnQ6IHtcbiAgICAgICAgICAgIGZpZWxkOiBmaWVsZChsYXlvdXRIZWFkZXIuZmFjZXRGaWVsZERlZiwge2V4cHI6ICdkYXR1bSd9KSxcbiAgICAgICAgICAgIG9yZGVyOiAobGF5b3V0SGVhZGVyLmZhY2V0RmllbGREZWYuaGVhZGVyICYmIGxheW91dEhlYWRlci5mYWNldEZpZWxkRGVmLnNvcnQpIHx8ICdhc2NlbmRpbmcnXG4gICAgICAgICAgfVxuICAgICAgICB9IDoge30pLFxuICAgICAgICAuLi4odGl0bGUgPyB7dGl0bGV9IDoge30pLFxuICAgICAgICAuLi4oaGVhZGVyQ21wdC5zaXplU2lnbmFsID8ge1xuICAgICAgICAgIGVuY29kZToge1xuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgIFtzaXplQ2hhbm5lbF06IGhlYWRlckNtcHQuc2l6ZVNpZ25hbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfToge30pLFxuICAgICAgICAuLi4oaGFzQXhlcyA/IHtheGVzfSA6IHt9KVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4iXX0=