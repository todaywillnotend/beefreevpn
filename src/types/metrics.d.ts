interface Window {
  ym: (
    counterId: number | string,
    methodName: string,
    eventName?: string | object,
    params?: object
  ) => void;
}
