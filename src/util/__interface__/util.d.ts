export type IFirstParamInFunction<T extends (...opts) => any> =
  Parameters<T>[0];

export type IFunctionReturn<T extends (...opts) => any> = Awaited<
  ReturnType<T>
>;

export type IMiniProgramResData<T extends (...opts) => any> = Parameters<
  Parameters<T>[0]["success"]
>[0];

export type IMiniProgramParams<T extends (...opts) => any> = Parameters<
  Parameters<T>[0]
>[0];