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
}
