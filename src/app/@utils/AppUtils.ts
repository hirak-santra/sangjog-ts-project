export default class AppUtils {
    static isObject(val: any): boolean {
        return val!==null && typeof val==='object';
    }
}
