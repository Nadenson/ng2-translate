"use strict";
var Parser = (function () {
    function Parser() {
        this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
    }
    /**
     * Interpolates a string to replace parameters
     * "This is a {{ key }}" ==> "This is a value", with params = { key: "value" }
     * @param expr
     * @param params
     * @returns {string}
     */
    Parser.prototype.interpolate = function (expr, params) {
        var _this = this;
        if (typeof expr !== 'string' || !params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            var r = _this.getValue(params, b);
            return typeof r !== 'undefined' ? r : substring;
        });
    };
    /**
     * Gets a value from an object by composed key
     * parser.getValue({ key1: { keyA: 'valueI' }}, 'key1.keyA') ==> 'valueI'
     * @param target
     * @param key
     * @returns {string}
     */
    Parser.prototype.getValue = function (target, key) {
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (target[key] !== undefined && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    return Parser;
}());
exports.Parser = Parser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyYW5zbGF0ZS5wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7UUFDSSxvQkFBZSxHQUFXLHVCQUF1QixDQUFDO0lBNkN0RCxDQUFDO0lBM0NHOzs7Ozs7T0FNRztJQUNJLDRCQUFXLEdBQWxCLFVBQW1CLElBQVksRUFBRSxNQUFZO1FBQTdDLGlCQVNDO1FBUkcsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFVBQUMsU0FBaUIsRUFBRSxDQUFTO1lBQ25FLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSx5QkFBUSxHQUFmLFVBQWdCLE1BQVcsRUFBRSxHQUFXO1FBQ3BDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNULEdBQUcsQ0FBQztZQUNBLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pGLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDdkIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEdBQUcsSUFBSSxHQUFHLENBQUM7WUFDZixDQUFDO1FBQ0wsQ0FBQyxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFFdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUwsYUFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksY0FBTSxTQThDbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICAgIHRlbXBsYXRlTWF0Y2hlcjogUmVnRXhwID0gL3t7XFxzPyhbXnt9XFxzXSopXFxzP319L2c7XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcnBvbGF0ZXMgYSBzdHJpbmcgdG8gcmVwbGFjZSBwYXJhbWV0ZXJzXG4gICAgICogXCJUaGlzIGlzIGEge3sga2V5IH19XCIgPT0+IFwiVGhpcyBpcyBhIHZhbHVlXCIsIHdpdGggcGFyYW1zID0geyBrZXk6IFwidmFsdWVcIiB9XG4gICAgICogQHBhcmFtIGV4cHJcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJwb2xhdGUoZXhwcjogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAodHlwZW9mIGV4cHIgIT09ICdzdHJpbmcnIHx8ICFwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBleHByO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cHIucmVwbGFjZSh0aGlzLnRlbXBsYXRlTWF0Y2hlciwgKHN1YnN0cmluZzogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHZhciByID0gdGhpcy5nZXRWYWx1ZShwYXJhbXMsIGIpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiByICE9PSAndW5kZWZpbmVkJyA/IHIgOiBzdWJzdHJpbmc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSB2YWx1ZSBmcm9tIGFuIG9iamVjdCBieSBjb21wb3NlZCBrZXlcbiAgICAgKiBwYXJzZXIuZ2V0VmFsdWUoeyBrZXkxOiB7IGtleUE6ICd2YWx1ZUknIH19LCAna2V5MS5rZXlBJykgPT0+ICd2YWx1ZUknXG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRWYWx1ZSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAga2V5ICs9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkICYmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdvYmplY3QnIHx8ICFrZXlzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXkgKz0gJy4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChrZXlzLmxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbn1cbiJdfQ==