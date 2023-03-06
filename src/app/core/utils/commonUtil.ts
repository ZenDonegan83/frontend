import { UserSessionDto } from "../models/userSessionDto";

export class commonUtil {
  private static _userSession?: UserSessionDto | null | undefined = null;
  static set userSession(obj: UserSessionDto | null | undefined) {
    if (!obj) {
      this.removeUserSession();
    } else {
      this.setUserSession(obj);
    }
    this._userSession = obj;
  }
  static get userSession(): UserSessionDto | null | undefined {
    if (this._userSession) {
      return this._userSession;
    } else if (this.getUserSession()) {
      this._userSession = this.getUserSession();
    }
    return this._userSession;
  }

  public static isLoggedIn(): boolean {
    if (this.userSession && this.userSession.artistID) return true;
    else return false;
  }

  public static convertModelToFormData(
    model: any,
    form?: FormData,
    namespace = ""
  ): FormData {
    let formData = form || new FormData();
    let formKey;

    for (let propertyName in model) {
      if (!model.hasOwnProperty(propertyName) || !model[propertyName]) continue;
      let formKey = namespace ? `${namespace}[${propertyName}]` : propertyName;
      if (model[propertyName] instanceof Date)
        formData.append(formKey, model[propertyName].toISOString());
      else if (model[propertyName] instanceof Array) {
        model[propertyName].forEach((element: any, index: number) => {
          const tempFormKey = `${formKey}[${index}]`;
          this.convertModelToFormData(element, formData, tempFormKey);
        });
      } else if (
        typeof model[propertyName] === "object" &&
        !(model[propertyName] instanceof File)
      )
        this.convertModelToFormData(model[propertyName], formData, formKey);
      else formData.append(formKey, model[propertyName].toString());
    }
    return formData;
  }

  public static setLoggedInSession(userSession: UserSessionDto) {
    commonUtil.userSession = userSession;
  }
  public static setLoggedOutInSession() {
    commonUtil.userSession = null;
  }
  public static setUserSession(userSession: UserSessionDto) {
    localStorage.setItem("UserSession", JSON.stringify(userSession));
  }
  public static removeUserSession() {
    localStorage.removeItem("UserSession");
  }
  public static getUserSession(): UserSessionDto | null {
    try {
      return JSON.parse(localStorage.getItem("UserSession"));
    } catch (err) {}
    return null;
  }

  public static isUserLoggedIn(): boolean {
    // return true;
    if (commonUtil.userSession && commonUtil.userSession?.username) {
      return true;
    }
    return false;
  }

  public static toSeconds(time_str) {
    // Extract hours, minutes and seconds
    var parts = time_str.split(":");
    // compute  and return total seconds
    return (
      parts[0] * 3600 + // an hour has 3600 seconds
      parts[1] * 60 // a minute has 60 seconds
    );
  }

  public static GetTimeDuration(startTime: string, endTime: string) {
    let sSec = commonUtil.toSeconds(startTime);
    let eSec = commonUtil.toSeconds(endTime);
    var difference = Math.abs(sSec - eSec);
    // format time differnece
    var result = [
      Math.floor(difference / 3600), // an hour has 3600 seconds
      Math.floor((difference % 3600) / 60), // a minute has 60 seconds
    ];
    // 0 padding and concatation
    var resultStr = result
      .map(function (v) {
        return v < 10 ? "0" + v : v;
      })
      .join(":");

    return resultStr;
  }

  public static timeConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }
}
