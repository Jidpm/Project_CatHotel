
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CatInfo
 * 
 */
export type CatInfo = $Result.DefaultSelection<Prisma.$CatInfoPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Roomtype
 * 
 */
export type Roomtype = $Result.DefaultSelection<Prisma.$RoomtypePayload>
/**
 * Model CatDetailBooking
 * 
 */
export type CatDetailBooking = $Result.DefaultSelection<Prisma.$CatDetailBookingPayload>
/**
 * Model BookingRoom
 * 
 */
export type BookingRoom = $Result.DefaultSelection<Prisma.$BookingRoomPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RoomStatus: {
  AVAILABLE: 'AVAILABLE',
  UNAVAILABLE: 'UNAVAILABLE',
  MAINTENANCE: 'MAINTENANCE',
  CLEANING: 'CLEANING'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.catInfo`: Exposes CRUD operations for the **CatInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CatInfos
    * const catInfos = await prisma.catInfo.findMany()
    * ```
    */
  get catInfo(): Prisma.CatInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomtype`: Exposes CRUD operations for the **Roomtype** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roomtypes
    * const roomtypes = await prisma.roomtype.findMany()
    * ```
    */
  get roomtype(): Prisma.RoomtypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.catDetailBooking`: Exposes CRUD operations for the **CatDetailBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CatDetailBookings
    * const catDetailBookings = await prisma.catDetailBooking.findMany()
    * ```
    */
  get catDetailBooking(): Prisma.CatDetailBookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingRoom`: Exposes CRUD operations for the **BookingRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingRooms
    * const bookingRooms = await prisma.bookingRoom.findMany()
    * ```
    */
  get bookingRoom(): Prisma.BookingRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CatInfo: 'CatInfo',
    Booking: 'Booking',
    Roomtype: 'Roomtype',
    CatDetailBooking: 'CatDetailBooking',
    BookingRoom: 'BookingRoom',
    Settings: 'Settings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "catInfo" | "booking" | "roomtype" | "catDetailBooking" | "bookingRoom" | "settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CatInfo: {
        payload: Prisma.$CatInfoPayload<ExtArgs>
        fields: Prisma.CatInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CatInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CatInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatInfoPayload>
          }
          findFirst: {
            args: Prisma.CatInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CatInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatInfoPayload>
          }
          findMany: {
            args: Prisma.CatInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatInfoPayload>[]
          }
          create: {
            args: Prisma.CatInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatInfoPayload>
          }
          createMany: {
            args: Prisma.CatInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CatInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatInfoPayload>
          }
          update: {
            args: Prisma.CatInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatInfoPayload>
          }
          deleteMany: {
            args: Prisma.CatInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CatInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CatInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatInfoPayload>
          }
          aggregate: {
            args: Prisma.CatInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCatInfo>
          }
          groupBy: {
            args: Prisma.CatInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CatInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CatInfoCountArgs<ExtArgs>
            result: $Utils.Optional<CatInfoCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Roomtype: {
        payload: Prisma.$RoomtypePayload<ExtArgs>
        fields: Prisma.RoomtypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomtypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomtypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomtypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomtypePayload>
          }
          findFirst: {
            args: Prisma.RoomtypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomtypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomtypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomtypePayload>
          }
          findMany: {
            args: Prisma.RoomtypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomtypePayload>[]
          }
          create: {
            args: Prisma.RoomtypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomtypePayload>
          }
          createMany: {
            args: Prisma.RoomtypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomtypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomtypePayload>
          }
          update: {
            args: Prisma.RoomtypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomtypePayload>
          }
          deleteMany: {
            args: Prisma.RoomtypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomtypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomtypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomtypePayload>
          }
          aggregate: {
            args: Prisma.RoomtypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomtype>
          }
          groupBy: {
            args: Prisma.RoomtypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomtypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomtypeCountArgs<ExtArgs>
            result: $Utils.Optional<RoomtypeCountAggregateOutputType> | number
          }
        }
      }
      CatDetailBooking: {
        payload: Prisma.$CatDetailBookingPayload<ExtArgs>
        fields: Prisma.CatDetailBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CatDetailBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatDetailBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CatDetailBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatDetailBookingPayload>
          }
          findFirst: {
            args: Prisma.CatDetailBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatDetailBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CatDetailBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatDetailBookingPayload>
          }
          findMany: {
            args: Prisma.CatDetailBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatDetailBookingPayload>[]
          }
          create: {
            args: Prisma.CatDetailBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatDetailBookingPayload>
          }
          createMany: {
            args: Prisma.CatDetailBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CatDetailBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatDetailBookingPayload>
          }
          update: {
            args: Prisma.CatDetailBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatDetailBookingPayload>
          }
          deleteMany: {
            args: Prisma.CatDetailBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CatDetailBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CatDetailBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CatDetailBookingPayload>
          }
          aggregate: {
            args: Prisma.CatDetailBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCatDetailBooking>
          }
          groupBy: {
            args: Prisma.CatDetailBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CatDetailBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CatDetailBookingCountArgs<ExtArgs>
            result: $Utils.Optional<CatDetailBookingCountAggregateOutputType> | number
          }
        }
      }
      BookingRoom: {
        payload: Prisma.$BookingRoomPayload<ExtArgs>
        fields: Prisma.BookingRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          findFirst: {
            args: Prisma.BookingRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          findMany: {
            args: Prisma.BookingRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>[]
          }
          create: {
            args: Prisma.BookingRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          createMany: {
            args: Prisma.BookingRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          update: {
            args: Prisma.BookingRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          deleteMany: {
            args: Prisma.BookingRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRoomPayload>
          }
          aggregate: {
            args: Prisma.BookingRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingRoom>
          }
          groupBy: {
            args: Prisma.BookingRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingRoomCountArgs<ExtArgs>
            result: $Utils.Optional<BookingRoomCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    catInfo?: CatInfoOmit
    booking?: BookingOmit
    roomtype?: RoomtypeOmit
    catDetailBooking?: CatDetailBookingOmit
    bookingRoom?: BookingRoomOmit
    settings?: SettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    catInfo: number
    booking: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catInfo?: boolean | UserCountOutputTypeCountCatInfoArgs
    booking?: boolean | UserCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCatInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatInfoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type CatInfoCountOutputType
   */

  export type CatInfoCountOutputType = {
    catDetailBooking: number
  }

  export type CatInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catDetailBooking?: boolean | CatInfoCountOutputTypeCountCatDetailBookingArgs
  }

  // Custom InputTypes
  /**
   * CatInfoCountOutputType without action
   */
  export type CatInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfoCountOutputType
     */
    select?: CatInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CatInfoCountOutputType without action
   */
  export type CatInfoCountOutputTypeCountCatDetailBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatDetailBookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    rooms: number
    catDetailBooking: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | BookingCountOutputTypeCountRoomsArgs
    catDetailBooking?: boolean | BookingCountOutputTypeCountCatDetailBookingArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingRoomWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountCatDetailBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatDetailBookingWhereInput
  }


  /**
   * Count Type RoomtypeCountOutputType
   */

  export type RoomtypeCountOutputType = {
    booking: number
  }

  export type RoomtypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | RoomtypeCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * RoomtypeCountOutputType without action
   */
  export type RoomtypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomtypeCountOutputType
     */
    select?: RoomtypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomtypeCountOutputType without action
   */
  export type RoomtypeCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingRoomWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    address: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    address: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phoneNumber: number
    password: number
    address: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    address?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    address?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    address?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phoneNumber: string | null
    password: string
    address: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    address?: boolean
    role?: boolean
    catInfo?: boolean | User$catInfoArgs<ExtArgs>
    booking?: boolean | User$bookingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    address?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phoneNumber" | "password" | "address" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    catInfo?: boolean | User$catInfoArgs<ExtArgs>
    booking?: boolean | User$bookingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      catInfo: Prisma.$CatInfoPayload<ExtArgs>[]
      booking: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      phoneNumber: string | null
      password: string
      address: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    catInfo<T extends User$catInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$catInfoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    booking<T extends User$bookingArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.catInfo
   */
  export type User$catInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
    where?: CatInfoWhereInput
    orderBy?: CatInfoOrderByWithRelationInput | CatInfoOrderByWithRelationInput[]
    cursor?: CatInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CatInfoScalarFieldEnum | CatInfoScalarFieldEnum[]
  }

  /**
   * User.booking
   */
  export type User$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CatInfo
   */

  export type AggregateCatInfo = {
    _count: CatInfoCountAggregateOutputType | null
    _avg: CatInfoAvgAggregateOutputType | null
    _sum: CatInfoSumAggregateOutputType | null
    _min: CatInfoMinAggregateOutputType | null
    _max: CatInfoMaxAggregateOutputType | null
  }

  export type CatInfoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CatInfoSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CatInfoMinAggregateOutputType = {
    id: number | null
    catName: string | null
    age: string | null
    breed: string | null
    healthInfo: string | null
    userId: number | null
  }

  export type CatInfoMaxAggregateOutputType = {
    id: number | null
    catName: string | null
    age: string | null
    breed: string | null
    healthInfo: string | null
    userId: number | null
  }

  export type CatInfoCountAggregateOutputType = {
    id: number
    catName: number
    age: number
    breed: number
    healthInfo: number
    userId: number
    _all: number
  }


  export type CatInfoAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CatInfoSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CatInfoMinAggregateInputType = {
    id?: true
    catName?: true
    age?: true
    breed?: true
    healthInfo?: true
    userId?: true
  }

  export type CatInfoMaxAggregateInputType = {
    id?: true
    catName?: true
    age?: true
    breed?: true
    healthInfo?: true
    userId?: true
  }

  export type CatInfoCountAggregateInputType = {
    id?: true
    catName?: true
    age?: true
    breed?: true
    healthInfo?: true
    userId?: true
    _all?: true
  }

  export type CatInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CatInfo to aggregate.
     */
    where?: CatInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatInfos to fetch.
     */
    orderBy?: CatInfoOrderByWithRelationInput | CatInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CatInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CatInfos
    **/
    _count?: true | CatInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CatInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CatInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CatInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CatInfoMaxAggregateInputType
  }

  export type GetCatInfoAggregateType<T extends CatInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateCatInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatInfo[P]>
      : GetScalarType<T[P], AggregateCatInfo[P]>
  }




  export type CatInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatInfoWhereInput
    orderBy?: CatInfoOrderByWithAggregationInput | CatInfoOrderByWithAggregationInput[]
    by: CatInfoScalarFieldEnum[] | CatInfoScalarFieldEnum
    having?: CatInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CatInfoCountAggregateInputType | true
    _avg?: CatInfoAvgAggregateInputType
    _sum?: CatInfoSumAggregateInputType
    _min?: CatInfoMinAggregateInputType
    _max?: CatInfoMaxAggregateInputType
  }

  export type CatInfoGroupByOutputType = {
    id: number
    catName: string
    age: string
    breed: string
    healthInfo: string
    userId: number | null
    _count: CatInfoCountAggregateOutputType | null
    _avg: CatInfoAvgAggregateOutputType | null
    _sum: CatInfoSumAggregateOutputType | null
    _min: CatInfoMinAggregateOutputType | null
    _max: CatInfoMaxAggregateOutputType | null
  }

  type GetCatInfoGroupByPayload<T extends CatInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CatInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CatInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CatInfoGroupByOutputType[P]>
            : GetScalarType<T[P], CatInfoGroupByOutputType[P]>
        }
      >
    >


  export type CatInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    catName?: boolean
    age?: boolean
    breed?: boolean
    healthInfo?: boolean
    userId?: boolean
    User?: boolean | CatInfo$UserArgs<ExtArgs>
    catDetailBooking?: boolean | CatInfo$catDetailBookingArgs<ExtArgs>
    _count?: boolean | CatInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["catInfo"]>



  export type CatInfoSelectScalar = {
    id?: boolean
    catName?: boolean
    age?: boolean
    breed?: boolean
    healthInfo?: boolean
    userId?: boolean
  }

  export type CatInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "catName" | "age" | "breed" | "healthInfo" | "userId", ExtArgs["result"]["catInfo"]>
  export type CatInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | CatInfo$UserArgs<ExtArgs>
    catDetailBooking?: boolean | CatInfo$catDetailBookingArgs<ExtArgs>
    _count?: boolean | CatInfoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CatInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CatInfo"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      catDetailBooking: Prisma.$CatDetailBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      catName: string
      age: string
      breed: string
      healthInfo: string
      userId: number | null
    }, ExtArgs["result"]["catInfo"]>
    composites: {}
  }

  type CatInfoGetPayload<S extends boolean | null | undefined | CatInfoDefaultArgs> = $Result.GetResult<Prisma.$CatInfoPayload, S>

  type CatInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CatInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CatInfoCountAggregateInputType | true
    }

  export interface CatInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CatInfo'], meta: { name: 'CatInfo' } }
    /**
     * Find zero or one CatInfo that matches the filter.
     * @param {CatInfoFindUniqueArgs} args - Arguments to find a CatInfo
     * @example
     * // Get one CatInfo
     * const catInfo = await prisma.catInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CatInfoFindUniqueArgs>(args: SelectSubset<T, CatInfoFindUniqueArgs<ExtArgs>>): Prisma__CatInfoClient<$Result.GetResult<Prisma.$CatInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CatInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CatInfoFindUniqueOrThrowArgs} args - Arguments to find a CatInfo
     * @example
     * // Get one CatInfo
     * const catInfo = await prisma.catInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CatInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, CatInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CatInfoClient<$Result.GetResult<Prisma.$CatInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CatInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatInfoFindFirstArgs} args - Arguments to find a CatInfo
     * @example
     * // Get one CatInfo
     * const catInfo = await prisma.catInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CatInfoFindFirstArgs>(args?: SelectSubset<T, CatInfoFindFirstArgs<ExtArgs>>): Prisma__CatInfoClient<$Result.GetResult<Prisma.$CatInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CatInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatInfoFindFirstOrThrowArgs} args - Arguments to find a CatInfo
     * @example
     * // Get one CatInfo
     * const catInfo = await prisma.catInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CatInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, CatInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CatInfoClient<$Result.GetResult<Prisma.$CatInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CatInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CatInfos
     * const catInfos = await prisma.catInfo.findMany()
     * 
     * // Get first 10 CatInfos
     * const catInfos = await prisma.catInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const catInfoWithIdOnly = await prisma.catInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CatInfoFindManyArgs>(args?: SelectSubset<T, CatInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CatInfo.
     * @param {CatInfoCreateArgs} args - Arguments to create a CatInfo.
     * @example
     * // Create one CatInfo
     * const CatInfo = await prisma.catInfo.create({
     *   data: {
     *     // ... data to create a CatInfo
     *   }
     * })
     * 
     */
    create<T extends CatInfoCreateArgs>(args: SelectSubset<T, CatInfoCreateArgs<ExtArgs>>): Prisma__CatInfoClient<$Result.GetResult<Prisma.$CatInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CatInfos.
     * @param {CatInfoCreateManyArgs} args - Arguments to create many CatInfos.
     * @example
     * // Create many CatInfos
     * const catInfo = await prisma.catInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CatInfoCreateManyArgs>(args?: SelectSubset<T, CatInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CatInfo.
     * @param {CatInfoDeleteArgs} args - Arguments to delete one CatInfo.
     * @example
     * // Delete one CatInfo
     * const CatInfo = await prisma.catInfo.delete({
     *   where: {
     *     // ... filter to delete one CatInfo
     *   }
     * })
     * 
     */
    delete<T extends CatInfoDeleteArgs>(args: SelectSubset<T, CatInfoDeleteArgs<ExtArgs>>): Prisma__CatInfoClient<$Result.GetResult<Prisma.$CatInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CatInfo.
     * @param {CatInfoUpdateArgs} args - Arguments to update one CatInfo.
     * @example
     * // Update one CatInfo
     * const catInfo = await prisma.catInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CatInfoUpdateArgs>(args: SelectSubset<T, CatInfoUpdateArgs<ExtArgs>>): Prisma__CatInfoClient<$Result.GetResult<Prisma.$CatInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CatInfos.
     * @param {CatInfoDeleteManyArgs} args - Arguments to filter CatInfos to delete.
     * @example
     * // Delete a few CatInfos
     * const { count } = await prisma.catInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CatInfoDeleteManyArgs>(args?: SelectSubset<T, CatInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CatInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CatInfos
     * const catInfo = await prisma.catInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CatInfoUpdateManyArgs>(args: SelectSubset<T, CatInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CatInfo.
     * @param {CatInfoUpsertArgs} args - Arguments to update or create a CatInfo.
     * @example
     * // Update or create a CatInfo
     * const catInfo = await prisma.catInfo.upsert({
     *   create: {
     *     // ... data to create a CatInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CatInfo we want to update
     *   }
     * })
     */
    upsert<T extends CatInfoUpsertArgs>(args: SelectSubset<T, CatInfoUpsertArgs<ExtArgs>>): Prisma__CatInfoClient<$Result.GetResult<Prisma.$CatInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CatInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatInfoCountArgs} args - Arguments to filter CatInfos to count.
     * @example
     * // Count the number of CatInfos
     * const count = await prisma.catInfo.count({
     *   where: {
     *     // ... the filter for the CatInfos we want to count
     *   }
     * })
    **/
    count<T extends CatInfoCountArgs>(
      args?: Subset<T, CatInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CatInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CatInfoAggregateArgs>(args: Subset<T, CatInfoAggregateArgs>): Prisma.PrismaPromise<GetCatInfoAggregateType<T>>

    /**
     * Group by CatInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CatInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatInfoGroupByArgs['orderBy'] }
        : { orderBy?: CatInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CatInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CatInfo model
   */
  readonly fields: CatInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CatInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CatInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends CatInfo$UserArgs<ExtArgs> = {}>(args?: Subset<T, CatInfo$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    catDetailBooking<T extends CatInfo$catDetailBookingArgs<ExtArgs> = {}>(args?: Subset<T, CatInfo$catDetailBookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatDetailBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CatInfo model
   */
  interface CatInfoFieldRefs {
    readonly id: FieldRef<"CatInfo", 'Int'>
    readonly catName: FieldRef<"CatInfo", 'String'>
    readonly age: FieldRef<"CatInfo", 'String'>
    readonly breed: FieldRef<"CatInfo", 'String'>
    readonly healthInfo: FieldRef<"CatInfo", 'String'>
    readonly userId: FieldRef<"CatInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CatInfo findUnique
   */
  export type CatInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
    /**
     * Filter, which CatInfo to fetch.
     */
    where: CatInfoWhereUniqueInput
  }

  /**
   * CatInfo findUniqueOrThrow
   */
  export type CatInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
    /**
     * Filter, which CatInfo to fetch.
     */
    where: CatInfoWhereUniqueInput
  }

  /**
   * CatInfo findFirst
   */
  export type CatInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
    /**
     * Filter, which CatInfo to fetch.
     */
    where?: CatInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatInfos to fetch.
     */
    orderBy?: CatInfoOrderByWithRelationInput | CatInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CatInfos.
     */
    cursor?: CatInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatInfos.
     */
    distinct?: CatInfoScalarFieldEnum | CatInfoScalarFieldEnum[]
  }

  /**
   * CatInfo findFirstOrThrow
   */
  export type CatInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
    /**
     * Filter, which CatInfo to fetch.
     */
    where?: CatInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatInfos to fetch.
     */
    orderBy?: CatInfoOrderByWithRelationInput | CatInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CatInfos.
     */
    cursor?: CatInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatInfos.
     */
    distinct?: CatInfoScalarFieldEnum | CatInfoScalarFieldEnum[]
  }

  /**
   * CatInfo findMany
   */
  export type CatInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
    /**
     * Filter, which CatInfos to fetch.
     */
    where?: CatInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatInfos to fetch.
     */
    orderBy?: CatInfoOrderByWithRelationInput | CatInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CatInfos.
     */
    cursor?: CatInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatInfos.
     */
    skip?: number
    distinct?: CatInfoScalarFieldEnum | CatInfoScalarFieldEnum[]
  }

  /**
   * CatInfo create
   */
  export type CatInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a CatInfo.
     */
    data: XOR<CatInfoCreateInput, CatInfoUncheckedCreateInput>
  }

  /**
   * CatInfo createMany
   */
  export type CatInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CatInfos.
     */
    data: CatInfoCreateManyInput | CatInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CatInfo update
   */
  export type CatInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a CatInfo.
     */
    data: XOR<CatInfoUpdateInput, CatInfoUncheckedUpdateInput>
    /**
     * Choose, which CatInfo to update.
     */
    where: CatInfoWhereUniqueInput
  }

  /**
   * CatInfo updateMany
   */
  export type CatInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CatInfos.
     */
    data: XOR<CatInfoUpdateManyMutationInput, CatInfoUncheckedUpdateManyInput>
    /**
     * Filter which CatInfos to update
     */
    where?: CatInfoWhereInput
    /**
     * Limit how many CatInfos to update.
     */
    limit?: number
  }

  /**
   * CatInfo upsert
   */
  export type CatInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the CatInfo to update in case it exists.
     */
    where: CatInfoWhereUniqueInput
    /**
     * In case the CatInfo found by the `where` argument doesn't exist, create a new CatInfo with this data.
     */
    create: XOR<CatInfoCreateInput, CatInfoUncheckedCreateInput>
    /**
     * In case the CatInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CatInfoUpdateInput, CatInfoUncheckedUpdateInput>
  }

  /**
   * CatInfo delete
   */
  export type CatInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
    /**
     * Filter which CatInfo to delete.
     */
    where: CatInfoWhereUniqueInput
  }

  /**
   * CatInfo deleteMany
   */
  export type CatInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CatInfos to delete
     */
    where?: CatInfoWhereInput
    /**
     * Limit how many CatInfos to delete.
     */
    limit?: number
  }

  /**
   * CatInfo.User
   */
  export type CatInfo$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * CatInfo.catDetailBooking
   */
  export type CatInfo$catDetailBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
    where?: CatDetailBookingWhereInput
    orderBy?: CatDetailBookingOrderByWithRelationInput | CatDetailBookingOrderByWithRelationInput[]
    cursor?: CatDetailBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CatDetailBookingScalarFieldEnum | CatDetailBookingScalarFieldEnum[]
  }

  /**
   * CatInfo without action
   */
  export type CatInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    userId: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    userId: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    checkInDate: Date | null
    checkOutDate: Date | null
    totalPrice: number | null
    bookingStatus: string | null
    userId: number | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    checkInDate: Date | null
    checkOutDate: Date | null
    totalPrice: number | null
    bookingStatus: string | null
    userId: number | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    checkInDate: number
    checkOutDate: number
    totalPrice: number
    bookingStatus: number
    userId: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    totalPrice?: true
    userId?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    totalPrice?: true
    userId?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    checkInDate?: true
    checkOutDate?: true
    totalPrice?: true
    bookingStatus?: true
    userId?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    checkInDate?: true
    checkOutDate?: true
    totalPrice?: true
    bookingStatus?: true
    userId?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    checkInDate?: true
    checkOutDate?: true
    totalPrice?: true
    bookingStatus?: true
    userId?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    checkInDate: Date
    checkOutDate: Date
    totalPrice: number
    bookingStatus: string
    userId: number | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    totalPrice?: boolean
    bookingStatus?: boolean
    userId?: boolean
    User?: boolean | Booking$UserArgs<ExtArgs>
    rooms?: boolean | Booking$roomsArgs<ExtArgs>
    catDetailBooking?: boolean | Booking$catDetailBookingArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    totalPrice?: boolean
    bookingStatus?: boolean
    userId?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checkInDate" | "checkOutDate" | "totalPrice" | "bookingStatus" | "userId", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Booking$UserArgs<ExtArgs>
    rooms?: boolean | Booking$roomsArgs<ExtArgs>
    catDetailBooking?: boolean | Booking$catDetailBookingArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      rooms: Prisma.$BookingRoomPayload<ExtArgs>[]
      catDetailBooking: Prisma.$CatDetailBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      checkInDate: Date
      checkOutDate: Date
      totalPrice: number
      bookingStatus: string
      userId: number | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Booking$UserArgs<ExtArgs> = {}>(args?: Subset<T, Booking$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rooms<T extends Booking$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    catDetailBooking<T extends Booking$catDetailBookingArgs<ExtArgs> = {}>(args?: Subset<T, Booking$catDetailBookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatDetailBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly checkInDate: FieldRef<"Booking", 'DateTime'>
    readonly checkOutDate: FieldRef<"Booking", 'DateTime'>
    readonly totalPrice: FieldRef<"Booking", 'Float'>
    readonly bookingStatus: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.User
   */
  export type Booking$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Booking.rooms
   */
  export type Booking$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    where?: BookingRoomWhereInput
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    cursor?: BookingRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * Booking.catDetailBooking
   */
  export type Booking$catDetailBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
    where?: CatDetailBookingWhereInput
    orderBy?: CatDetailBookingOrderByWithRelationInput | CatDetailBookingOrderByWithRelationInput[]
    cursor?: CatDetailBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CatDetailBookingScalarFieldEnum | CatDetailBookingScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Roomtype
   */

  export type AggregateRoomtype = {
    _count: RoomtypeCountAggregateOutputType | null
    _avg: RoomtypeAvgAggregateOutputType | null
    _sum: RoomtypeSumAggregateOutputType | null
    _min: RoomtypeMinAggregateOutputType | null
    _max: RoomtypeMaxAggregateOutputType | null
  }

  export type RoomtypeAvgAggregateOutputType = {
    id: number | null
    roomPerNight: number | null
  }

  export type RoomtypeSumAggregateOutputType = {
    id: number | null
    roomPerNight: number | null
  }

  export type RoomtypeMinAggregateOutputType = {
    id: number | null
    roomType: string | null
    roomPerNight: number | null
    roomStatus: $Enums.RoomStatus | null
  }

  export type RoomtypeMaxAggregateOutputType = {
    id: number | null
    roomType: string | null
    roomPerNight: number | null
    roomStatus: $Enums.RoomStatus | null
  }

  export type RoomtypeCountAggregateOutputType = {
    id: number
    roomType: number
    roomPerNight: number
    roomStatus: number
    _all: number
  }


  export type RoomtypeAvgAggregateInputType = {
    id?: true
    roomPerNight?: true
  }

  export type RoomtypeSumAggregateInputType = {
    id?: true
    roomPerNight?: true
  }

  export type RoomtypeMinAggregateInputType = {
    id?: true
    roomType?: true
    roomPerNight?: true
    roomStatus?: true
  }

  export type RoomtypeMaxAggregateInputType = {
    id?: true
    roomType?: true
    roomPerNight?: true
    roomStatus?: true
  }

  export type RoomtypeCountAggregateInputType = {
    id?: true
    roomType?: true
    roomPerNight?: true
    roomStatus?: true
    _all?: true
  }

  export type RoomtypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roomtype to aggregate.
     */
    where?: RoomtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roomtypes to fetch.
     */
    orderBy?: RoomtypeOrderByWithRelationInput | RoomtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roomtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roomtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roomtypes
    **/
    _count?: true | RoomtypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomtypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomtypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomtypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomtypeMaxAggregateInputType
  }

  export type GetRoomtypeAggregateType<T extends RoomtypeAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomtype]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomtype[P]>
      : GetScalarType<T[P], AggregateRoomtype[P]>
  }




  export type RoomtypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomtypeWhereInput
    orderBy?: RoomtypeOrderByWithAggregationInput | RoomtypeOrderByWithAggregationInput[]
    by: RoomtypeScalarFieldEnum[] | RoomtypeScalarFieldEnum
    having?: RoomtypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomtypeCountAggregateInputType | true
    _avg?: RoomtypeAvgAggregateInputType
    _sum?: RoomtypeSumAggregateInputType
    _min?: RoomtypeMinAggregateInputType
    _max?: RoomtypeMaxAggregateInputType
  }

  export type RoomtypeGroupByOutputType = {
    id: number
    roomType: string
    roomPerNight: number
    roomStatus: $Enums.RoomStatus
    _count: RoomtypeCountAggregateOutputType | null
    _avg: RoomtypeAvgAggregateOutputType | null
    _sum: RoomtypeSumAggregateOutputType | null
    _min: RoomtypeMinAggregateOutputType | null
    _max: RoomtypeMaxAggregateOutputType | null
  }

  type GetRoomtypeGroupByPayload<T extends RoomtypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomtypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomtypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomtypeGroupByOutputType[P]>
            : GetScalarType<T[P], RoomtypeGroupByOutputType[P]>
        }
      >
    >


  export type RoomtypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomType?: boolean
    roomPerNight?: boolean
    roomStatus?: boolean
    booking?: boolean | Roomtype$bookingArgs<ExtArgs>
    _count?: boolean | RoomtypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomtype"]>



  export type RoomtypeSelectScalar = {
    id?: boolean
    roomType?: boolean
    roomPerNight?: boolean
    roomStatus?: boolean
  }

  export type RoomtypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomType" | "roomPerNight" | "roomStatus", ExtArgs["result"]["roomtype"]>
  export type RoomtypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | Roomtype$bookingArgs<ExtArgs>
    _count?: boolean | RoomtypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomtypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roomtype"
    objects: {
      booking: Prisma.$BookingRoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomType: string
      roomPerNight: number
      roomStatus: $Enums.RoomStatus
    }, ExtArgs["result"]["roomtype"]>
    composites: {}
  }

  type RoomtypeGetPayload<S extends boolean | null | undefined | RoomtypeDefaultArgs> = $Result.GetResult<Prisma.$RoomtypePayload, S>

  type RoomtypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomtypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomtypeCountAggregateInputType | true
    }

  export interface RoomtypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roomtype'], meta: { name: 'Roomtype' } }
    /**
     * Find zero or one Roomtype that matches the filter.
     * @param {RoomtypeFindUniqueArgs} args - Arguments to find a Roomtype
     * @example
     * // Get one Roomtype
     * const roomtype = await prisma.roomtype.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomtypeFindUniqueArgs>(args: SelectSubset<T, RoomtypeFindUniqueArgs<ExtArgs>>): Prisma__RoomtypeClient<$Result.GetResult<Prisma.$RoomtypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roomtype that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomtypeFindUniqueOrThrowArgs} args - Arguments to find a Roomtype
     * @example
     * // Get one Roomtype
     * const roomtype = await prisma.roomtype.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomtypeFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomtypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomtypeClient<$Result.GetResult<Prisma.$RoomtypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roomtype that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomtypeFindFirstArgs} args - Arguments to find a Roomtype
     * @example
     * // Get one Roomtype
     * const roomtype = await prisma.roomtype.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomtypeFindFirstArgs>(args?: SelectSubset<T, RoomtypeFindFirstArgs<ExtArgs>>): Prisma__RoomtypeClient<$Result.GetResult<Prisma.$RoomtypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roomtype that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomtypeFindFirstOrThrowArgs} args - Arguments to find a Roomtype
     * @example
     * // Get one Roomtype
     * const roomtype = await prisma.roomtype.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomtypeFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomtypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomtypeClient<$Result.GetResult<Prisma.$RoomtypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roomtypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomtypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roomtypes
     * const roomtypes = await prisma.roomtype.findMany()
     * 
     * // Get first 10 Roomtypes
     * const roomtypes = await prisma.roomtype.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomtypeWithIdOnly = await prisma.roomtype.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomtypeFindManyArgs>(args?: SelectSubset<T, RoomtypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomtypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roomtype.
     * @param {RoomtypeCreateArgs} args - Arguments to create a Roomtype.
     * @example
     * // Create one Roomtype
     * const Roomtype = await prisma.roomtype.create({
     *   data: {
     *     // ... data to create a Roomtype
     *   }
     * })
     * 
     */
    create<T extends RoomtypeCreateArgs>(args: SelectSubset<T, RoomtypeCreateArgs<ExtArgs>>): Prisma__RoomtypeClient<$Result.GetResult<Prisma.$RoomtypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roomtypes.
     * @param {RoomtypeCreateManyArgs} args - Arguments to create many Roomtypes.
     * @example
     * // Create many Roomtypes
     * const roomtype = await prisma.roomtype.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomtypeCreateManyArgs>(args?: SelectSubset<T, RoomtypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roomtype.
     * @param {RoomtypeDeleteArgs} args - Arguments to delete one Roomtype.
     * @example
     * // Delete one Roomtype
     * const Roomtype = await prisma.roomtype.delete({
     *   where: {
     *     // ... filter to delete one Roomtype
     *   }
     * })
     * 
     */
    delete<T extends RoomtypeDeleteArgs>(args: SelectSubset<T, RoomtypeDeleteArgs<ExtArgs>>): Prisma__RoomtypeClient<$Result.GetResult<Prisma.$RoomtypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roomtype.
     * @param {RoomtypeUpdateArgs} args - Arguments to update one Roomtype.
     * @example
     * // Update one Roomtype
     * const roomtype = await prisma.roomtype.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomtypeUpdateArgs>(args: SelectSubset<T, RoomtypeUpdateArgs<ExtArgs>>): Prisma__RoomtypeClient<$Result.GetResult<Prisma.$RoomtypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roomtypes.
     * @param {RoomtypeDeleteManyArgs} args - Arguments to filter Roomtypes to delete.
     * @example
     * // Delete a few Roomtypes
     * const { count } = await prisma.roomtype.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomtypeDeleteManyArgs>(args?: SelectSubset<T, RoomtypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roomtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomtypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roomtypes
     * const roomtype = await prisma.roomtype.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomtypeUpdateManyArgs>(args: SelectSubset<T, RoomtypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roomtype.
     * @param {RoomtypeUpsertArgs} args - Arguments to update or create a Roomtype.
     * @example
     * // Update or create a Roomtype
     * const roomtype = await prisma.roomtype.upsert({
     *   create: {
     *     // ... data to create a Roomtype
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roomtype we want to update
     *   }
     * })
     */
    upsert<T extends RoomtypeUpsertArgs>(args: SelectSubset<T, RoomtypeUpsertArgs<ExtArgs>>): Prisma__RoomtypeClient<$Result.GetResult<Prisma.$RoomtypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roomtypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomtypeCountArgs} args - Arguments to filter Roomtypes to count.
     * @example
     * // Count the number of Roomtypes
     * const count = await prisma.roomtype.count({
     *   where: {
     *     // ... the filter for the Roomtypes we want to count
     *   }
     * })
    **/
    count<T extends RoomtypeCountArgs>(
      args?: Subset<T, RoomtypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomtypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roomtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomtypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomtypeAggregateArgs>(args: Subset<T, RoomtypeAggregateArgs>): Prisma.PrismaPromise<GetRoomtypeAggregateType<T>>

    /**
     * Group by Roomtype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomtypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomtypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomtypeGroupByArgs['orderBy'] }
        : { orderBy?: RoomtypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomtypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomtypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roomtype model
   */
  readonly fields: RoomtypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roomtype.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomtypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends Roomtype$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Roomtype$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roomtype model
   */
  interface RoomtypeFieldRefs {
    readonly id: FieldRef<"Roomtype", 'Int'>
    readonly roomType: FieldRef<"Roomtype", 'String'>
    readonly roomPerNight: FieldRef<"Roomtype", 'Float'>
    readonly roomStatus: FieldRef<"Roomtype", 'RoomStatus'>
  }
    

  // Custom InputTypes
  /**
   * Roomtype findUnique
   */
  export type RoomtypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roomtype
     */
    select?: RoomtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roomtype
     */
    omit?: RoomtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomtypeInclude<ExtArgs> | null
    /**
     * Filter, which Roomtype to fetch.
     */
    where: RoomtypeWhereUniqueInput
  }

  /**
   * Roomtype findUniqueOrThrow
   */
  export type RoomtypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roomtype
     */
    select?: RoomtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roomtype
     */
    omit?: RoomtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomtypeInclude<ExtArgs> | null
    /**
     * Filter, which Roomtype to fetch.
     */
    where: RoomtypeWhereUniqueInput
  }

  /**
   * Roomtype findFirst
   */
  export type RoomtypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roomtype
     */
    select?: RoomtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roomtype
     */
    omit?: RoomtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomtypeInclude<ExtArgs> | null
    /**
     * Filter, which Roomtype to fetch.
     */
    where?: RoomtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roomtypes to fetch.
     */
    orderBy?: RoomtypeOrderByWithRelationInput | RoomtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roomtypes.
     */
    cursor?: RoomtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roomtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roomtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roomtypes.
     */
    distinct?: RoomtypeScalarFieldEnum | RoomtypeScalarFieldEnum[]
  }

  /**
   * Roomtype findFirstOrThrow
   */
  export type RoomtypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roomtype
     */
    select?: RoomtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roomtype
     */
    omit?: RoomtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomtypeInclude<ExtArgs> | null
    /**
     * Filter, which Roomtype to fetch.
     */
    where?: RoomtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roomtypes to fetch.
     */
    orderBy?: RoomtypeOrderByWithRelationInput | RoomtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roomtypes.
     */
    cursor?: RoomtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roomtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roomtypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roomtypes.
     */
    distinct?: RoomtypeScalarFieldEnum | RoomtypeScalarFieldEnum[]
  }

  /**
   * Roomtype findMany
   */
  export type RoomtypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roomtype
     */
    select?: RoomtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roomtype
     */
    omit?: RoomtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomtypeInclude<ExtArgs> | null
    /**
     * Filter, which Roomtypes to fetch.
     */
    where?: RoomtypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roomtypes to fetch.
     */
    orderBy?: RoomtypeOrderByWithRelationInput | RoomtypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roomtypes.
     */
    cursor?: RoomtypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roomtypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roomtypes.
     */
    skip?: number
    distinct?: RoomtypeScalarFieldEnum | RoomtypeScalarFieldEnum[]
  }

  /**
   * Roomtype create
   */
  export type RoomtypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roomtype
     */
    select?: RoomtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roomtype
     */
    omit?: RoomtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomtypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Roomtype.
     */
    data: XOR<RoomtypeCreateInput, RoomtypeUncheckedCreateInput>
  }

  /**
   * Roomtype createMany
   */
  export type RoomtypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roomtypes.
     */
    data: RoomtypeCreateManyInput | RoomtypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roomtype update
   */
  export type RoomtypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roomtype
     */
    select?: RoomtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roomtype
     */
    omit?: RoomtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomtypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Roomtype.
     */
    data: XOR<RoomtypeUpdateInput, RoomtypeUncheckedUpdateInput>
    /**
     * Choose, which Roomtype to update.
     */
    where: RoomtypeWhereUniqueInput
  }

  /**
   * Roomtype updateMany
   */
  export type RoomtypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roomtypes.
     */
    data: XOR<RoomtypeUpdateManyMutationInput, RoomtypeUncheckedUpdateManyInput>
    /**
     * Filter which Roomtypes to update
     */
    where?: RoomtypeWhereInput
    /**
     * Limit how many Roomtypes to update.
     */
    limit?: number
  }

  /**
   * Roomtype upsert
   */
  export type RoomtypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roomtype
     */
    select?: RoomtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roomtype
     */
    omit?: RoomtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomtypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Roomtype to update in case it exists.
     */
    where: RoomtypeWhereUniqueInput
    /**
     * In case the Roomtype found by the `where` argument doesn't exist, create a new Roomtype with this data.
     */
    create: XOR<RoomtypeCreateInput, RoomtypeUncheckedCreateInput>
    /**
     * In case the Roomtype was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomtypeUpdateInput, RoomtypeUncheckedUpdateInput>
  }

  /**
   * Roomtype delete
   */
  export type RoomtypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roomtype
     */
    select?: RoomtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roomtype
     */
    omit?: RoomtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomtypeInclude<ExtArgs> | null
    /**
     * Filter which Roomtype to delete.
     */
    where: RoomtypeWhereUniqueInput
  }

  /**
   * Roomtype deleteMany
   */
  export type RoomtypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roomtypes to delete
     */
    where?: RoomtypeWhereInput
    /**
     * Limit how many Roomtypes to delete.
     */
    limit?: number
  }

  /**
   * Roomtype.booking
   */
  export type Roomtype$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    where?: BookingRoomWhereInput
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    cursor?: BookingRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * Roomtype without action
   */
  export type RoomtypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roomtype
     */
    select?: RoomtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roomtype
     */
    omit?: RoomtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomtypeInclude<ExtArgs> | null
  }


  /**
   * Model CatDetailBooking
   */

  export type AggregateCatDetailBooking = {
    _count: CatDetailBookingCountAggregateOutputType | null
    _avg: CatDetailBookingAvgAggregateOutputType | null
    _sum: CatDetailBookingSumAggregateOutputType | null
    _min: CatDetailBookingMinAggregateOutputType | null
    _max: CatDetailBookingMaxAggregateOutputType | null
  }

  export type CatDetailBookingAvgAggregateOutputType = {
    id: number | null
    catInfoId: number | null
    bookingId: number | null
  }

  export type CatDetailBookingSumAggregateOutputType = {
    id: number | null
    catInfoId: number | null
    bookingId: number | null
  }

  export type CatDetailBookingMinAggregateOutputType = {
    id: number | null
    catInfoId: number | null
    bookingId: number | null
  }

  export type CatDetailBookingMaxAggregateOutputType = {
    id: number | null
    catInfoId: number | null
    bookingId: number | null
  }

  export type CatDetailBookingCountAggregateOutputType = {
    id: number
    catInfoId: number
    bookingId: number
    _all: number
  }


  export type CatDetailBookingAvgAggregateInputType = {
    id?: true
    catInfoId?: true
    bookingId?: true
  }

  export type CatDetailBookingSumAggregateInputType = {
    id?: true
    catInfoId?: true
    bookingId?: true
  }

  export type CatDetailBookingMinAggregateInputType = {
    id?: true
    catInfoId?: true
    bookingId?: true
  }

  export type CatDetailBookingMaxAggregateInputType = {
    id?: true
    catInfoId?: true
    bookingId?: true
  }

  export type CatDetailBookingCountAggregateInputType = {
    id?: true
    catInfoId?: true
    bookingId?: true
    _all?: true
  }

  export type CatDetailBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CatDetailBooking to aggregate.
     */
    where?: CatDetailBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatDetailBookings to fetch.
     */
    orderBy?: CatDetailBookingOrderByWithRelationInput | CatDetailBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CatDetailBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatDetailBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatDetailBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CatDetailBookings
    **/
    _count?: true | CatDetailBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CatDetailBookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CatDetailBookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CatDetailBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CatDetailBookingMaxAggregateInputType
  }

  export type GetCatDetailBookingAggregateType<T extends CatDetailBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateCatDetailBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCatDetailBooking[P]>
      : GetScalarType<T[P], AggregateCatDetailBooking[P]>
  }




  export type CatDetailBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CatDetailBookingWhereInput
    orderBy?: CatDetailBookingOrderByWithAggregationInput | CatDetailBookingOrderByWithAggregationInput[]
    by: CatDetailBookingScalarFieldEnum[] | CatDetailBookingScalarFieldEnum
    having?: CatDetailBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CatDetailBookingCountAggregateInputType | true
    _avg?: CatDetailBookingAvgAggregateInputType
    _sum?: CatDetailBookingSumAggregateInputType
    _min?: CatDetailBookingMinAggregateInputType
    _max?: CatDetailBookingMaxAggregateInputType
  }

  export type CatDetailBookingGroupByOutputType = {
    id: number
    catInfoId: number | null
    bookingId: number | null
    _count: CatDetailBookingCountAggregateOutputType | null
    _avg: CatDetailBookingAvgAggregateOutputType | null
    _sum: CatDetailBookingSumAggregateOutputType | null
    _min: CatDetailBookingMinAggregateOutputType | null
    _max: CatDetailBookingMaxAggregateOutputType | null
  }

  type GetCatDetailBookingGroupByPayload<T extends CatDetailBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CatDetailBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CatDetailBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CatDetailBookingGroupByOutputType[P]>
            : GetScalarType<T[P], CatDetailBookingGroupByOutputType[P]>
        }
      >
    >


  export type CatDetailBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    catInfoId?: boolean
    bookingId?: boolean
    CatInfo?: boolean | CatDetailBooking$CatInfoArgs<ExtArgs>
    Booking?: boolean | CatDetailBooking$BookingArgs<ExtArgs>
  }, ExtArgs["result"]["catDetailBooking"]>



  export type CatDetailBookingSelectScalar = {
    id?: boolean
    catInfoId?: boolean
    bookingId?: boolean
  }

  export type CatDetailBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "catInfoId" | "bookingId", ExtArgs["result"]["catDetailBooking"]>
  export type CatDetailBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CatInfo?: boolean | CatDetailBooking$CatInfoArgs<ExtArgs>
    Booking?: boolean | CatDetailBooking$BookingArgs<ExtArgs>
  }

  export type $CatDetailBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CatDetailBooking"
    objects: {
      CatInfo: Prisma.$CatInfoPayload<ExtArgs> | null
      Booking: Prisma.$BookingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      catInfoId: number | null
      bookingId: number | null
    }, ExtArgs["result"]["catDetailBooking"]>
    composites: {}
  }

  type CatDetailBookingGetPayload<S extends boolean | null | undefined | CatDetailBookingDefaultArgs> = $Result.GetResult<Prisma.$CatDetailBookingPayload, S>

  type CatDetailBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CatDetailBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CatDetailBookingCountAggregateInputType | true
    }

  export interface CatDetailBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CatDetailBooking'], meta: { name: 'CatDetailBooking' } }
    /**
     * Find zero or one CatDetailBooking that matches the filter.
     * @param {CatDetailBookingFindUniqueArgs} args - Arguments to find a CatDetailBooking
     * @example
     * // Get one CatDetailBooking
     * const catDetailBooking = await prisma.catDetailBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CatDetailBookingFindUniqueArgs>(args: SelectSubset<T, CatDetailBookingFindUniqueArgs<ExtArgs>>): Prisma__CatDetailBookingClient<$Result.GetResult<Prisma.$CatDetailBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CatDetailBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CatDetailBookingFindUniqueOrThrowArgs} args - Arguments to find a CatDetailBooking
     * @example
     * // Get one CatDetailBooking
     * const catDetailBooking = await prisma.catDetailBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CatDetailBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, CatDetailBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CatDetailBookingClient<$Result.GetResult<Prisma.$CatDetailBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CatDetailBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatDetailBookingFindFirstArgs} args - Arguments to find a CatDetailBooking
     * @example
     * // Get one CatDetailBooking
     * const catDetailBooking = await prisma.catDetailBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CatDetailBookingFindFirstArgs>(args?: SelectSubset<T, CatDetailBookingFindFirstArgs<ExtArgs>>): Prisma__CatDetailBookingClient<$Result.GetResult<Prisma.$CatDetailBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CatDetailBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatDetailBookingFindFirstOrThrowArgs} args - Arguments to find a CatDetailBooking
     * @example
     * // Get one CatDetailBooking
     * const catDetailBooking = await prisma.catDetailBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CatDetailBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, CatDetailBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CatDetailBookingClient<$Result.GetResult<Prisma.$CatDetailBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CatDetailBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatDetailBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CatDetailBookings
     * const catDetailBookings = await prisma.catDetailBooking.findMany()
     * 
     * // Get first 10 CatDetailBookings
     * const catDetailBookings = await prisma.catDetailBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const catDetailBookingWithIdOnly = await prisma.catDetailBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CatDetailBookingFindManyArgs>(args?: SelectSubset<T, CatDetailBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CatDetailBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CatDetailBooking.
     * @param {CatDetailBookingCreateArgs} args - Arguments to create a CatDetailBooking.
     * @example
     * // Create one CatDetailBooking
     * const CatDetailBooking = await prisma.catDetailBooking.create({
     *   data: {
     *     // ... data to create a CatDetailBooking
     *   }
     * })
     * 
     */
    create<T extends CatDetailBookingCreateArgs>(args: SelectSubset<T, CatDetailBookingCreateArgs<ExtArgs>>): Prisma__CatDetailBookingClient<$Result.GetResult<Prisma.$CatDetailBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CatDetailBookings.
     * @param {CatDetailBookingCreateManyArgs} args - Arguments to create many CatDetailBookings.
     * @example
     * // Create many CatDetailBookings
     * const catDetailBooking = await prisma.catDetailBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CatDetailBookingCreateManyArgs>(args?: SelectSubset<T, CatDetailBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CatDetailBooking.
     * @param {CatDetailBookingDeleteArgs} args - Arguments to delete one CatDetailBooking.
     * @example
     * // Delete one CatDetailBooking
     * const CatDetailBooking = await prisma.catDetailBooking.delete({
     *   where: {
     *     // ... filter to delete one CatDetailBooking
     *   }
     * })
     * 
     */
    delete<T extends CatDetailBookingDeleteArgs>(args: SelectSubset<T, CatDetailBookingDeleteArgs<ExtArgs>>): Prisma__CatDetailBookingClient<$Result.GetResult<Prisma.$CatDetailBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CatDetailBooking.
     * @param {CatDetailBookingUpdateArgs} args - Arguments to update one CatDetailBooking.
     * @example
     * // Update one CatDetailBooking
     * const catDetailBooking = await prisma.catDetailBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CatDetailBookingUpdateArgs>(args: SelectSubset<T, CatDetailBookingUpdateArgs<ExtArgs>>): Prisma__CatDetailBookingClient<$Result.GetResult<Prisma.$CatDetailBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CatDetailBookings.
     * @param {CatDetailBookingDeleteManyArgs} args - Arguments to filter CatDetailBookings to delete.
     * @example
     * // Delete a few CatDetailBookings
     * const { count } = await prisma.catDetailBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CatDetailBookingDeleteManyArgs>(args?: SelectSubset<T, CatDetailBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CatDetailBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatDetailBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CatDetailBookings
     * const catDetailBooking = await prisma.catDetailBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CatDetailBookingUpdateManyArgs>(args: SelectSubset<T, CatDetailBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CatDetailBooking.
     * @param {CatDetailBookingUpsertArgs} args - Arguments to update or create a CatDetailBooking.
     * @example
     * // Update or create a CatDetailBooking
     * const catDetailBooking = await prisma.catDetailBooking.upsert({
     *   create: {
     *     // ... data to create a CatDetailBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CatDetailBooking we want to update
     *   }
     * })
     */
    upsert<T extends CatDetailBookingUpsertArgs>(args: SelectSubset<T, CatDetailBookingUpsertArgs<ExtArgs>>): Prisma__CatDetailBookingClient<$Result.GetResult<Prisma.$CatDetailBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CatDetailBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatDetailBookingCountArgs} args - Arguments to filter CatDetailBookings to count.
     * @example
     * // Count the number of CatDetailBookings
     * const count = await prisma.catDetailBooking.count({
     *   where: {
     *     // ... the filter for the CatDetailBookings we want to count
     *   }
     * })
    **/
    count<T extends CatDetailBookingCountArgs>(
      args?: Subset<T, CatDetailBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CatDetailBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CatDetailBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatDetailBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CatDetailBookingAggregateArgs>(args: Subset<T, CatDetailBookingAggregateArgs>): Prisma.PrismaPromise<GetCatDetailBookingAggregateType<T>>

    /**
     * Group by CatDetailBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CatDetailBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CatDetailBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CatDetailBookingGroupByArgs['orderBy'] }
        : { orderBy?: CatDetailBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CatDetailBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCatDetailBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CatDetailBooking model
   */
  readonly fields: CatDetailBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CatDetailBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CatDetailBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CatInfo<T extends CatDetailBooking$CatInfoArgs<ExtArgs> = {}>(args?: Subset<T, CatDetailBooking$CatInfoArgs<ExtArgs>>): Prisma__CatInfoClient<$Result.GetResult<Prisma.$CatInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Booking<T extends CatDetailBooking$BookingArgs<ExtArgs> = {}>(args?: Subset<T, CatDetailBooking$BookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CatDetailBooking model
   */
  interface CatDetailBookingFieldRefs {
    readonly id: FieldRef<"CatDetailBooking", 'Int'>
    readonly catInfoId: FieldRef<"CatDetailBooking", 'Int'>
    readonly bookingId: FieldRef<"CatDetailBooking", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CatDetailBooking findUnique
   */
  export type CatDetailBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
    /**
     * Filter, which CatDetailBooking to fetch.
     */
    where: CatDetailBookingWhereUniqueInput
  }

  /**
   * CatDetailBooking findUniqueOrThrow
   */
  export type CatDetailBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
    /**
     * Filter, which CatDetailBooking to fetch.
     */
    where: CatDetailBookingWhereUniqueInput
  }

  /**
   * CatDetailBooking findFirst
   */
  export type CatDetailBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
    /**
     * Filter, which CatDetailBooking to fetch.
     */
    where?: CatDetailBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatDetailBookings to fetch.
     */
    orderBy?: CatDetailBookingOrderByWithRelationInput | CatDetailBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CatDetailBookings.
     */
    cursor?: CatDetailBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatDetailBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatDetailBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatDetailBookings.
     */
    distinct?: CatDetailBookingScalarFieldEnum | CatDetailBookingScalarFieldEnum[]
  }

  /**
   * CatDetailBooking findFirstOrThrow
   */
  export type CatDetailBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
    /**
     * Filter, which CatDetailBooking to fetch.
     */
    where?: CatDetailBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatDetailBookings to fetch.
     */
    orderBy?: CatDetailBookingOrderByWithRelationInput | CatDetailBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CatDetailBookings.
     */
    cursor?: CatDetailBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatDetailBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatDetailBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CatDetailBookings.
     */
    distinct?: CatDetailBookingScalarFieldEnum | CatDetailBookingScalarFieldEnum[]
  }

  /**
   * CatDetailBooking findMany
   */
  export type CatDetailBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
    /**
     * Filter, which CatDetailBookings to fetch.
     */
    where?: CatDetailBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CatDetailBookings to fetch.
     */
    orderBy?: CatDetailBookingOrderByWithRelationInput | CatDetailBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CatDetailBookings.
     */
    cursor?: CatDetailBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CatDetailBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CatDetailBookings.
     */
    skip?: number
    distinct?: CatDetailBookingScalarFieldEnum | CatDetailBookingScalarFieldEnum[]
  }

  /**
   * CatDetailBooking create
   */
  export type CatDetailBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a CatDetailBooking.
     */
    data?: XOR<CatDetailBookingCreateInput, CatDetailBookingUncheckedCreateInput>
  }

  /**
   * CatDetailBooking createMany
   */
  export type CatDetailBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CatDetailBookings.
     */
    data: CatDetailBookingCreateManyInput | CatDetailBookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CatDetailBooking update
   */
  export type CatDetailBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a CatDetailBooking.
     */
    data: XOR<CatDetailBookingUpdateInput, CatDetailBookingUncheckedUpdateInput>
    /**
     * Choose, which CatDetailBooking to update.
     */
    where: CatDetailBookingWhereUniqueInput
  }

  /**
   * CatDetailBooking updateMany
   */
  export type CatDetailBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CatDetailBookings.
     */
    data: XOR<CatDetailBookingUpdateManyMutationInput, CatDetailBookingUncheckedUpdateManyInput>
    /**
     * Filter which CatDetailBookings to update
     */
    where?: CatDetailBookingWhereInput
    /**
     * Limit how many CatDetailBookings to update.
     */
    limit?: number
  }

  /**
   * CatDetailBooking upsert
   */
  export type CatDetailBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the CatDetailBooking to update in case it exists.
     */
    where: CatDetailBookingWhereUniqueInput
    /**
     * In case the CatDetailBooking found by the `where` argument doesn't exist, create a new CatDetailBooking with this data.
     */
    create: XOR<CatDetailBookingCreateInput, CatDetailBookingUncheckedCreateInput>
    /**
     * In case the CatDetailBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CatDetailBookingUpdateInput, CatDetailBookingUncheckedUpdateInput>
  }

  /**
   * CatDetailBooking delete
   */
  export type CatDetailBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
    /**
     * Filter which CatDetailBooking to delete.
     */
    where: CatDetailBookingWhereUniqueInput
  }

  /**
   * CatDetailBooking deleteMany
   */
  export type CatDetailBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CatDetailBookings to delete
     */
    where?: CatDetailBookingWhereInput
    /**
     * Limit how many CatDetailBookings to delete.
     */
    limit?: number
  }

  /**
   * CatDetailBooking.CatInfo
   */
  export type CatDetailBooking$CatInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatInfo
     */
    select?: CatInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatInfo
     */
    omit?: CatInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatInfoInclude<ExtArgs> | null
    where?: CatInfoWhereInput
  }

  /**
   * CatDetailBooking.Booking
   */
  export type CatDetailBooking$BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * CatDetailBooking without action
   */
  export type CatDetailBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CatDetailBooking
     */
    select?: CatDetailBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CatDetailBooking
     */
    omit?: CatDetailBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CatDetailBookingInclude<ExtArgs> | null
  }


  /**
   * Model BookingRoom
   */

  export type AggregateBookingRoom = {
    _count: BookingRoomCountAggregateOutputType | null
    _avg: BookingRoomAvgAggregateOutputType | null
    _sum: BookingRoomSumAggregateOutputType | null
    _min: BookingRoomMinAggregateOutputType | null
    _max: BookingRoomMaxAggregateOutputType | null
  }

  export type BookingRoomAvgAggregateOutputType = {
    bookingId: number | null
    roomtypeId: number | null
  }

  export type BookingRoomSumAggregateOutputType = {
    bookingId: number | null
    roomtypeId: number | null
  }

  export type BookingRoomMinAggregateOutputType = {
    bookingId: number | null
    roomtypeId: number | null
  }

  export type BookingRoomMaxAggregateOutputType = {
    bookingId: number | null
    roomtypeId: number | null
  }

  export type BookingRoomCountAggregateOutputType = {
    bookingId: number
    roomtypeId: number
    _all: number
  }


  export type BookingRoomAvgAggregateInputType = {
    bookingId?: true
    roomtypeId?: true
  }

  export type BookingRoomSumAggregateInputType = {
    bookingId?: true
    roomtypeId?: true
  }

  export type BookingRoomMinAggregateInputType = {
    bookingId?: true
    roomtypeId?: true
  }

  export type BookingRoomMaxAggregateInputType = {
    bookingId?: true
    roomtypeId?: true
  }

  export type BookingRoomCountAggregateInputType = {
    bookingId?: true
    roomtypeId?: true
    _all?: true
  }

  export type BookingRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingRoom to aggregate.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingRooms
    **/
    _count?: true | BookingRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingRoomMaxAggregateInputType
  }

  export type GetBookingRoomAggregateType<T extends BookingRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingRoom[P]>
      : GetScalarType<T[P], AggregateBookingRoom[P]>
  }




  export type BookingRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingRoomWhereInput
    orderBy?: BookingRoomOrderByWithAggregationInput | BookingRoomOrderByWithAggregationInput[]
    by: BookingRoomScalarFieldEnum[] | BookingRoomScalarFieldEnum
    having?: BookingRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingRoomCountAggregateInputType | true
    _avg?: BookingRoomAvgAggregateInputType
    _sum?: BookingRoomSumAggregateInputType
    _min?: BookingRoomMinAggregateInputType
    _max?: BookingRoomMaxAggregateInputType
  }

  export type BookingRoomGroupByOutputType = {
    bookingId: number
    roomtypeId: number
    _count: BookingRoomCountAggregateOutputType | null
    _avg: BookingRoomAvgAggregateOutputType | null
    _sum: BookingRoomSumAggregateOutputType | null
    _min: BookingRoomMinAggregateOutputType | null
    _max: BookingRoomMaxAggregateOutputType | null
  }

  type GetBookingRoomGroupByPayload<T extends BookingRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingRoomGroupByOutputType[P]>
            : GetScalarType<T[P], BookingRoomGroupByOutputType[P]>
        }
      >
    >


  export type BookingRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookingId?: boolean
    roomtypeId?: boolean
    Booking?: boolean | BookingDefaultArgs<ExtArgs>
    Roomtype?: boolean | BookingRoom$RoomtypeArgs<ExtArgs>
  }, ExtArgs["result"]["bookingRoom"]>



  export type BookingRoomSelectScalar = {
    bookingId?: boolean
    roomtypeId?: boolean
  }

  export type BookingRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookingId" | "roomtypeId", ExtArgs["result"]["bookingRoom"]>
  export type BookingRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Booking?: boolean | BookingDefaultArgs<ExtArgs>
    Roomtype?: boolean | BookingRoom$RoomtypeArgs<ExtArgs>
  }

  export type $BookingRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingRoom"
    objects: {
      Booking: Prisma.$BookingPayload<ExtArgs>
      Roomtype: Prisma.$RoomtypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      bookingId: number
      roomtypeId: number
    }, ExtArgs["result"]["bookingRoom"]>
    composites: {}
  }

  type BookingRoomGetPayload<S extends boolean | null | undefined | BookingRoomDefaultArgs> = $Result.GetResult<Prisma.$BookingRoomPayload, S>

  type BookingRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingRoomCountAggregateInputType | true
    }

  export interface BookingRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingRoom'], meta: { name: 'BookingRoom' } }
    /**
     * Find zero or one BookingRoom that matches the filter.
     * @param {BookingRoomFindUniqueArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingRoomFindUniqueArgs>(args: SelectSubset<T, BookingRoomFindUniqueArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingRoomFindUniqueOrThrowArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomFindFirstArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingRoomFindFirstArgs>(args?: SelectSubset<T, BookingRoomFindFirstArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomFindFirstOrThrowArgs} args - Arguments to find a BookingRoom
     * @example
     * // Get one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingRooms
     * const bookingRooms = await prisma.bookingRoom.findMany()
     * 
     * // Get first 10 BookingRooms
     * const bookingRooms = await prisma.bookingRoom.findMany({ take: 10 })
     * 
     * // Only select the `bookingId`
     * const bookingRoomWithBookingIdOnly = await prisma.bookingRoom.findMany({ select: { bookingId: true } })
     * 
     */
    findMany<T extends BookingRoomFindManyArgs>(args?: SelectSubset<T, BookingRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingRoom.
     * @param {BookingRoomCreateArgs} args - Arguments to create a BookingRoom.
     * @example
     * // Create one BookingRoom
     * const BookingRoom = await prisma.bookingRoom.create({
     *   data: {
     *     // ... data to create a BookingRoom
     *   }
     * })
     * 
     */
    create<T extends BookingRoomCreateArgs>(args: SelectSubset<T, BookingRoomCreateArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingRooms.
     * @param {BookingRoomCreateManyArgs} args - Arguments to create many BookingRooms.
     * @example
     * // Create many BookingRooms
     * const bookingRoom = await prisma.bookingRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingRoomCreateManyArgs>(args?: SelectSubset<T, BookingRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookingRoom.
     * @param {BookingRoomDeleteArgs} args - Arguments to delete one BookingRoom.
     * @example
     * // Delete one BookingRoom
     * const BookingRoom = await prisma.bookingRoom.delete({
     *   where: {
     *     // ... filter to delete one BookingRoom
     *   }
     * })
     * 
     */
    delete<T extends BookingRoomDeleteArgs>(args: SelectSubset<T, BookingRoomDeleteArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingRoom.
     * @param {BookingRoomUpdateArgs} args - Arguments to update one BookingRoom.
     * @example
     * // Update one BookingRoom
     * const bookingRoom = await prisma.bookingRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingRoomUpdateArgs>(args: SelectSubset<T, BookingRoomUpdateArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingRooms.
     * @param {BookingRoomDeleteManyArgs} args - Arguments to filter BookingRooms to delete.
     * @example
     * // Delete a few BookingRooms
     * const { count } = await prisma.bookingRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingRoomDeleteManyArgs>(args?: SelectSubset<T, BookingRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingRooms
     * const bookingRoom = await prisma.bookingRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingRoomUpdateManyArgs>(args: SelectSubset<T, BookingRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookingRoom.
     * @param {BookingRoomUpsertArgs} args - Arguments to update or create a BookingRoom.
     * @example
     * // Update or create a BookingRoom
     * const bookingRoom = await prisma.bookingRoom.upsert({
     *   create: {
     *     // ... data to create a BookingRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingRoom we want to update
     *   }
     * })
     */
    upsert<T extends BookingRoomUpsertArgs>(args: SelectSubset<T, BookingRoomUpsertArgs<ExtArgs>>): Prisma__BookingRoomClient<$Result.GetResult<Prisma.$BookingRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomCountArgs} args - Arguments to filter BookingRooms to count.
     * @example
     * // Count the number of BookingRooms
     * const count = await prisma.bookingRoom.count({
     *   where: {
     *     // ... the filter for the BookingRooms we want to count
     *   }
     * })
    **/
    count<T extends BookingRoomCountArgs>(
      args?: Subset<T, BookingRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingRoomAggregateArgs>(args: Subset<T, BookingRoomAggregateArgs>): Prisma.PrismaPromise<GetBookingRoomAggregateType<T>>

    /**
     * Group by BookingRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingRoomGroupByArgs['orderBy'] }
        : { orderBy?: BookingRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingRoom model
   */
  readonly fields: BookingRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Roomtype<T extends BookingRoom$RoomtypeArgs<ExtArgs> = {}>(args?: Subset<T, BookingRoom$RoomtypeArgs<ExtArgs>>): Prisma__RoomtypeClient<$Result.GetResult<Prisma.$RoomtypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookingRoom model
   */
  interface BookingRoomFieldRefs {
    readonly bookingId: FieldRef<"BookingRoom", 'Int'>
    readonly roomtypeId: FieldRef<"BookingRoom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookingRoom findUnique
   */
  export type BookingRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom findUniqueOrThrow
   */
  export type BookingRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom findFirst
   */
  export type BookingRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingRooms.
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingRooms.
     */
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * BookingRoom findFirstOrThrow
   */
  export type BookingRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRoom to fetch.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingRooms.
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingRooms.
     */
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * BookingRoom findMany
   */
  export type BookingRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter, which BookingRooms to fetch.
     */
    where?: BookingRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRooms to fetch.
     */
    orderBy?: BookingRoomOrderByWithRelationInput | BookingRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingRooms.
     */
    cursor?: BookingRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRooms.
     */
    skip?: number
    distinct?: BookingRoomScalarFieldEnum | BookingRoomScalarFieldEnum[]
  }

  /**
   * BookingRoom create
   */
  export type BookingRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingRoom.
     */
    data: XOR<BookingRoomCreateInput, BookingRoomUncheckedCreateInput>
  }

  /**
   * BookingRoom createMany
   */
  export type BookingRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingRooms.
     */
    data: BookingRoomCreateManyInput | BookingRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingRoom update
   */
  export type BookingRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingRoom.
     */
    data: XOR<BookingRoomUpdateInput, BookingRoomUncheckedUpdateInput>
    /**
     * Choose, which BookingRoom to update.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom updateMany
   */
  export type BookingRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingRooms.
     */
    data: XOR<BookingRoomUpdateManyMutationInput, BookingRoomUncheckedUpdateManyInput>
    /**
     * Filter which BookingRooms to update
     */
    where?: BookingRoomWhereInput
    /**
     * Limit how many BookingRooms to update.
     */
    limit?: number
  }

  /**
   * BookingRoom upsert
   */
  export type BookingRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingRoom to update in case it exists.
     */
    where: BookingRoomWhereUniqueInput
    /**
     * In case the BookingRoom found by the `where` argument doesn't exist, create a new BookingRoom with this data.
     */
    create: XOR<BookingRoomCreateInput, BookingRoomUncheckedCreateInput>
    /**
     * In case the BookingRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingRoomUpdateInput, BookingRoomUncheckedUpdateInput>
  }

  /**
   * BookingRoom delete
   */
  export type BookingRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
    /**
     * Filter which BookingRoom to delete.
     */
    where: BookingRoomWhereUniqueInput
  }

  /**
   * BookingRoom deleteMany
   */
  export type BookingRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingRooms to delete
     */
    where?: BookingRoomWhereInput
    /**
     * Limit how many BookingRooms to delete.
     */
    limit?: number
  }

  /**
   * BookingRoom.Roomtype
   */
  export type BookingRoom$RoomtypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roomtype
     */
    select?: RoomtypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roomtype
     */
    omit?: RoomtypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomtypeInclude<ExtArgs> | null
    where?: RoomtypeWhereInput
  }

  /**
   * BookingRoom without action
   */
  export type BookingRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRoom
     */
    select?: BookingRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRoom
     */
    omit?: BookingRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRoomInclude<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingsSumAggregateOutputType = {
    id: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: number | null
    keyName: string | null
    keyValue: string | null
    description: string | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: number | null
    keyName: string | null
    keyValue: string | null
    description: string | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    keyName: number
    keyValue: number
    description: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    id?: true
  }

  export type SettingsSumAggregateInputType = {
    id?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    keyName?: true
    keyValue?: true
    description?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    keyName?: true
    keyValue?: true
    description?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    keyName?: true
    keyValue?: true
    description?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: number
    keyName: string
    keyValue: string
    description: string | null
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyName?: boolean
    keyValue?: boolean
    description?: boolean
  }, ExtArgs["result"]["settings"]>



  export type SettingsSelectScalar = {
    id?: boolean
    keyName?: boolean
    keyValue?: boolean
    description?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyName" | "keyValue" | "description", ExtArgs["result"]["settings"]>

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keyName: string
      keyValue: string
      description: string | null
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'Int'>
    readonly keyName: FieldRef<"Settings", 'String'>
    readonly keyValue: FieldRef<"Settings", 'String'>
    readonly description: FieldRef<"Settings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    address: 'address',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CatInfoScalarFieldEnum: {
    id: 'id',
    catName: 'catName',
    age: 'age',
    breed: 'breed',
    healthInfo: 'healthInfo',
    userId: 'userId'
  };

  export type CatInfoScalarFieldEnum = (typeof CatInfoScalarFieldEnum)[keyof typeof CatInfoScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    checkInDate: 'checkInDate',
    checkOutDate: 'checkOutDate',
    totalPrice: 'totalPrice',
    bookingStatus: 'bookingStatus',
    userId: 'userId'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const RoomtypeScalarFieldEnum: {
    id: 'id',
    roomType: 'roomType',
    roomPerNight: 'roomPerNight',
    roomStatus: 'roomStatus'
  };

  export type RoomtypeScalarFieldEnum = (typeof RoomtypeScalarFieldEnum)[keyof typeof RoomtypeScalarFieldEnum]


  export const CatDetailBookingScalarFieldEnum: {
    id: 'id',
    catInfoId: 'catInfoId',
    bookingId: 'bookingId'
  };

  export type CatDetailBookingScalarFieldEnum = (typeof CatDetailBookingScalarFieldEnum)[keyof typeof CatDetailBookingScalarFieldEnum]


  export const BookingRoomScalarFieldEnum: {
    bookingId: 'bookingId',
    roomtypeId: 'roomtypeId'
  };

  export type BookingRoomScalarFieldEnum = (typeof BookingRoomScalarFieldEnum)[keyof typeof BookingRoomScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    keyName: 'keyName',
    keyValue: 'keyValue',
    description: 'description'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    address: 'address'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CatInfoOrderByRelevanceFieldEnum: {
    catName: 'catName',
    age: 'age',
    breed: 'breed',
    healthInfo: 'healthInfo'
  };

  export type CatInfoOrderByRelevanceFieldEnum = (typeof CatInfoOrderByRelevanceFieldEnum)[keyof typeof CatInfoOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    bookingStatus: 'bookingStatus'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  export const RoomtypeOrderByRelevanceFieldEnum: {
    roomType: 'roomType'
  };

  export type RoomtypeOrderByRelevanceFieldEnum = (typeof RoomtypeOrderByRelevanceFieldEnum)[keyof typeof RoomtypeOrderByRelevanceFieldEnum]


  export const SettingsOrderByRelevanceFieldEnum: {
    keyName: 'keyName',
    keyValue: 'keyValue',
    description: 'description'
  };

  export type SettingsOrderByRelevanceFieldEnum = (typeof SettingsOrderByRelevanceFieldEnum)[keyof typeof SettingsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    catInfo?: CatInfoListRelationFilter
    booking?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    address?: SortOrder
    role?: SortOrder
    catInfo?: CatInfoOrderByRelationAggregateInput
    booking?: BookingOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    catInfo?: CatInfoListRelationFilter
    booking?: BookingListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    address?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type CatInfoWhereInput = {
    AND?: CatInfoWhereInput | CatInfoWhereInput[]
    OR?: CatInfoWhereInput[]
    NOT?: CatInfoWhereInput | CatInfoWhereInput[]
    id?: IntFilter<"CatInfo"> | number
    catName?: StringFilter<"CatInfo"> | string
    age?: StringFilter<"CatInfo"> | string
    breed?: StringFilter<"CatInfo"> | string
    healthInfo?: StringFilter<"CatInfo"> | string
    userId?: IntNullableFilter<"CatInfo"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    catDetailBooking?: CatDetailBookingListRelationFilter
  }

  export type CatInfoOrderByWithRelationInput = {
    id?: SortOrder
    catName?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    healthInfo?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    catDetailBooking?: CatDetailBookingOrderByRelationAggregateInput
    _relevance?: CatInfoOrderByRelevanceInput
  }

  export type CatInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CatInfoWhereInput | CatInfoWhereInput[]
    OR?: CatInfoWhereInput[]
    NOT?: CatInfoWhereInput | CatInfoWhereInput[]
    catName?: StringFilter<"CatInfo"> | string
    age?: StringFilter<"CatInfo"> | string
    breed?: StringFilter<"CatInfo"> | string
    healthInfo?: StringFilter<"CatInfo"> | string
    userId?: IntNullableFilter<"CatInfo"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    catDetailBooking?: CatDetailBookingListRelationFilter
  }, "id">

  export type CatInfoOrderByWithAggregationInput = {
    id?: SortOrder
    catName?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    healthInfo?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: CatInfoCountOrderByAggregateInput
    _avg?: CatInfoAvgOrderByAggregateInput
    _max?: CatInfoMaxOrderByAggregateInput
    _min?: CatInfoMinOrderByAggregateInput
    _sum?: CatInfoSumOrderByAggregateInput
  }

  export type CatInfoScalarWhereWithAggregatesInput = {
    AND?: CatInfoScalarWhereWithAggregatesInput | CatInfoScalarWhereWithAggregatesInput[]
    OR?: CatInfoScalarWhereWithAggregatesInput[]
    NOT?: CatInfoScalarWhereWithAggregatesInput | CatInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CatInfo"> | number
    catName?: StringWithAggregatesFilter<"CatInfo"> | string
    age?: StringWithAggregatesFilter<"CatInfo"> | string
    breed?: StringWithAggregatesFilter<"CatInfo"> | string
    healthInfo?: StringWithAggregatesFilter<"CatInfo"> | string
    userId?: IntNullableWithAggregatesFilter<"CatInfo"> | number | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    checkInDate?: DateTimeFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    bookingStatus?: StringFilter<"Booking"> | string
    userId?: IntNullableFilter<"Booking"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    rooms?: BookingRoomListRelationFilter
    catDetailBooking?: CatDetailBookingListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    totalPrice?: SortOrder
    bookingStatus?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    rooms?: BookingRoomOrderByRelationAggregateInput
    catDetailBooking?: CatDetailBookingOrderByRelationAggregateInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    checkInDate?: DateTimeFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    bookingStatus?: StringFilter<"Booking"> | string
    userId?: IntNullableFilter<"Booking"> | number | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    rooms?: BookingRoomListRelationFilter
    catDetailBooking?: CatDetailBookingListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    totalPrice?: SortOrder
    bookingStatus?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    checkInDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    totalPrice?: FloatWithAggregatesFilter<"Booking"> | number
    bookingStatus?: StringWithAggregatesFilter<"Booking"> | string
    userId?: IntNullableWithAggregatesFilter<"Booking"> | number | null
  }

  export type RoomtypeWhereInput = {
    AND?: RoomtypeWhereInput | RoomtypeWhereInput[]
    OR?: RoomtypeWhereInput[]
    NOT?: RoomtypeWhereInput | RoomtypeWhereInput[]
    id?: IntFilter<"Roomtype"> | number
    roomType?: StringFilter<"Roomtype"> | string
    roomPerNight?: FloatFilter<"Roomtype"> | number
    roomStatus?: EnumRoomStatusFilter<"Roomtype"> | $Enums.RoomStatus
    booking?: BookingRoomListRelationFilter
  }

  export type RoomtypeOrderByWithRelationInput = {
    id?: SortOrder
    roomType?: SortOrder
    roomPerNight?: SortOrder
    roomStatus?: SortOrder
    booking?: BookingRoomOrderByRelationAggregateInput
    _relevance?: RoomtypeOrderByRelevanceInput
  }

  export type RoomtypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomtypeWhereInput | RoomtypeWhereInput[]
    OR?: RoomtypeWhereInput[]
    NOT?: RoomtypeWhereInput | RoomtypeWhereInput[]
    roomType?: StringFilter<"Roomtype"> | string
    roomPerNight?: FloatFilter<"Roomtype"> | number
    roomStatus?: EnumRoomStatusFilter<"Roomtype"> | $Enums.RoomStatus
    booking?: BookingRoomListRelationFilter
  }, "id">

  export type RoomtypeOrderByWithAggregationInput = {
    id?: SortOrder
    roomType?: SortOrder
    roomPerNight?: SortOrder
    roomStatus?: SortOrder
    _count?: RoomtypeCountOrderByAggregateInput
    _avg?: RoomtypeAvgOrderByAggregateInput
    _max?: RoomtypeMaxOrderByAggregateInput
    _min?: RoomtypeMinOrderByAggregateInput
    _sum?: RoomtypeSumOrderByAggregateInput
  }

  export type RoomtypeScalarWhereWithAggregatesInput = {
    AND?: RoomtypeScalarWhereWithAggregatesInput | RoomtypeScalarWhereWithAggregatesInput[]
    OR?: RoomtypeScalarWhereWithAggregatesInput[]
    NOT?: RoomtypeScalarWhereWithAggregatesInput | RoomtypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roomtype"> | number
    roomType?: StringWithAggregatesFilter<"Roomtype"> | string
    roomPerNight?: FloatWithAggregatesFilter<"Roomtype"> | number
    roomStatus?: EnumRoomStatusWithAggregatesFilter<"Roomtype"> | $Enums.RoomStatus
  }

  export type CatDetailBookingWhereInput = {
    AND?: CatDetailBookingWhereInput | CatDetailBookingWhereInput[]
    OR?: CatDetailBookingWhereInput[]
    NOT?: CatDetailBookingWhereInput | CatDetailBookingWhereInput[]
    id?: IntFilter<"CatDetailBooking"> | number
    catInfoId?: IntNullableFilter<"CatDetailBooking"> | number | null
    bookingId?: IntNullableFilter<"CatDetailBooking"> | number | null
    CatInfo?: XOR<CatInfoNullableScalarRelationFilter, CatInfoWhereInput> | null
    Booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }

  export type CatDetailBookingOrderByWithRelationInput = {
    id?: SortOrder
    catInfoId?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    CatInfo?: CatInfoOrderByWithRelationInput
    Booking?: BookingOrderByWithRelationInput
  }

  export type CatDetailBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    catInfoId_bookingId?: CatDetailBookingCatInfoIdBookingIdCompoundUniqueInput
    AND?: CatDetailBookingWhereInput | CatDetailBookingWhereInput[]
    OR?: CatDetailBookingWhereInput[]
    NOT?: CatDetailBookingWhereInput | CatDetailBookingWhereInput[]
    catInfoId?: IntNullableFilter<"CatDetailBooking"> | number | null
    bookingId?: IntNullableFilter<"CatDetailBooking"> | number | null
    CatInfo?: XOR<CatInfoNullableScalarRelationFilter, CatInfoWhereInput> | null
    Booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
  }, "id" | "catInfoId_bookingId">

  export type CatDetailBookingOrderByWithAggregationInput = {
    id?: SortOrder
    catInfoId?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    _count?: CatDetailBookingCountOrderByAggregateInput
    _avg?: CatDetailBookingAvgOrderByAggregateInput
    _max?: CatDetailBookingMaxOrderByAggregateInput
    _min?: CatDetailBookingMinOrderByAggregateInput
    _sum?: CatDetailBookingSumOrderByAggregateInput
  }

  export type CatDetailBookingScalarWhereWithAggregatesInput = {
    AND?: CatDetailBookingScalarWhereWithAggregatesInput | CatDetailBookingScalarWhereWithAggregatesInput[]
    OR?: CatDetailBookingScalarWhereWithAggregatesInput[]
    NOT?: CatDetailBookingScalarWhereWithAggregatesInput | CatDetailBookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CatDetailBooking"> | number
    catInfoId?: IntNullableWithAggregatesFilter<"CatDetailBooking"> | number | null
    bookingId?: IntNullableWithAggregatesFilter<"CatDetailBooking"> | number | null
  }

  export type BookingRoomWhereInput = {
    AND?: BookingRoomWhereInput | BookingRoomWhereInput[]
    OR?: BookingRoomWhereInput[]
    NOT?: BookingRoomWhereInput | BookingRoomWhereInput[]
    bookingId?: IntFilter<"BookingRoom"> | number
    roomtypeId?: IntFilter<"BookingRoom"> | number
    Booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    Roomtype?: XOR<RoomtypeNullableScalarRelationFilter, RoomtypeWhereInput> | null
  }

  export type BookingRoomOrderByWithRelationInput = {
    bookingId?: SortOrder
    roomtypeId?: SortOrder
    Booking?: BookingOrderByWithRelationInput
    Roomtype?: RoomtypeOrderByWithRelationInput
  }

  export type BookingRoomWhereUniqueInput = Prisma.AtLeast<{
    bookingId_roomtypeId?: BookingRoomBookingIdRoomtypeIdCompoundUniqueInput
    AND?: BookingRoomWhereInput | BookingRoomWhereInput[]
    OR?: BookingRoomWhereInput[]
    NOT?: BookingRoomWhereInput | BookingRoomWhereInput[]
    bookingId?: IntFilter<"BookingRoom"> | number
    roomtypeId?: IntFilter<"BookingRoom"> | number
    Booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    Roomtype?: XOR<RoomtypeNullableScalarRelationFilter, RoomtypeWhereInput> | null
  }, "bookingId_roomtypeId">

  export type BookingRoomOrderByWithAggregationInput = {
    bookingId?: SortOrder
    roomtypeId?: SortOrder
    _count?: BookingRoomCountOrderByAggregateInput
    _avg?: BookingRoomAvgOrderByAggregateInput
    _max?: BookingRoomMaxOrderByAggregateInput
    _min?: BookingRoomMinOrderByAggregateInput
    _sum?: BookingRoomSumOrderByAggregateInput
  }

  export type BookingRoomScalarWhereWithAggregatesInput = {
    AND?: BookingRoomScalarWhereWithAggregatesInput | BookingRoomScalarWhereWithAggregatesInput[]
    OR?: BookingRoomScalarWhereWithAggregatesInput[]
    NOT?: BookingRoomScalarWhereWithAggregatesInput | BookingRoomScalarWhereWithAggregatesInput[]
    bookingId?: IntWithAggregatesFilter<"BookingRoom"> | number
    roomtypeId?: IntWithAggregatesFilter<"BookingRoom"> | number
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: IntFilter<"Settings"> | number
    keyName?: StringFilter<"Settings"> | string
    keyValue?: StringFilter<"Settings"> | string
    description?: StringNullableFilter<"Settings"> | string | null
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    keyName?: SortOrder
    keyValue?: SortOrder
    description?: SortOrderInput | SortOrder
    _relevance?: SettingsOrderByRelevanceInput
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    keyName?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    keyValue?: StringFilter<"Settings"> | string
    description?: StringNullableFilter<"Settings"> | string | null
  }, "id" | "keyName">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    keyName?: SortOrder
    keyValue?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Settings"> | number
    keyName?: StringWithAggregatesFilter<"Settings"> | string
    keyValue?: StringWithAggregatesFilter<"Settings"> | string
    description?: StringNullableWithAggregatesFilter<"Settings"> | string | null
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password: string
    address: string
    role?: $Enums.Role
    catInfo?: CatInfoCreateNestedManyWithoutUserInput
    booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password: string
    address: string
    role?: $Enums.Role
    catInfo?: CatInfoUncheckedCreateNestedManyWithoutUserInput
    booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    catInfo?: CatInfoUpdateManyWithoutUserNestedInput
    booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    catInfo?: CatInfoUncheckedUpdateManyWithoutUserNestedInput
    booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password: string
    address: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CatInfoCreateInput = {
    catName: string
    age: string
    breed: string
    healthInfo: string
    User?: UserCreateNestedOneWithoutCatInfoInput
    catDetailBooking?: CatDetailBookingCreateNestedManyWithoutCatInfoInput
  }

  export type CatInfoUncheckedCreateInput = {
    id?: number
    catName: string
    age: string
    breed: string
    healthInfo: string
    userId?: number | null
    catDetailBooking?: CatDetailBookingUncheckedCreateNestedManyWithoutCatInfoInput
  }

  export type CatInfoUpdateInput = {
    catName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    healthInfo?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutCatInfoNestedInput
    catDetailBooking?: CatDetailBookingUpdateManyWithoutCatInfoNestedInput
  }

  export type CatInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    catName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    healthInfo?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    catDetailBooking?: CatDetailBookingUncheckedUpdateManyWithoutCatInfoNestedInput
  }

  export type CatInfoCreateManyInput = {
    id?: number
    catName: string
    age: string
    breed: string
    healthInfo: string
    userId?: number | null
  }

  export type CatInfoUpdateManyMutationInput = {
    catName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    healthInfo?: StringFieldUpdateOperationsInput | string
  }

  export type CatInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    catName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    healthInfo?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingCreateInput = {
    checkInDate: Date | string
    checkOutDate: Date | string
    totalPrice: number
    bookingStatus: string
    User?: UserCreateNestedOneWithoutBookingInput
    rooms?: BookingRoomCreateNestedManyWithoutBookingInput
    catDetailBooking?: CatDetailBookingCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    checkInDate: Date | string
    checkOutDate: Date | string
    totalPrice: number
    bookingStatus: string
    userId?: number | null
    rooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    catDetailBooking?: CatDetailBookingUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    bookingStatus?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutBookingNestedInput
    rooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    catDetailBooking?: CatDetailBookingUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    bookingStatus?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    rooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    catDetailBooking?: CatDetailBookingUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    checkInDate: Date | string
    checkOutDate: Date | string
    totalPrice: number
    bookingStatus: string
    userId?: number | null
  }

  export type BookingUpdateManyMutationInput = {
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    bookingStatus?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    bookingStatus?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoomtypeCreateInput = {
    roomType: string
    roomPerNight: number
    roomStatus?: $Enums.RoomStatus
    booking?: BookingRoomCreateNestedManyWithoutRoomtypeInput
  }

  export type RoomtypeUncheckedCreateInput = {
    id?: number
    roomType: string
    roomPerNight: number
    roomStatus?: $Enums.RoomStatus
    booking?: BookingRoomUncheckedCreateNestedManyWithoutRoomtypeInput
  }

  export type RoomtypeUpdateInput = {
    roomType?: StringFieldUpdateOperationsInput | string
    roomPerNight?: FloatFieldUpdateOperationsInput | number
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    booking?: BookingRoomUpdateManyWithoutRoomtypeNestedInput
  }

  export type RoomtypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    roomPerNight?: FloatFieldUpdateOperationsInput | number
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    booking?: BookingRoomUncheckedUpdateManyWithoutRoomtypeNestedInput
  }

  export type RoomtypeCreateManyInput = {
    id?: number
    roomType: string
    roomPerNight: number
    roomStatus?: $Enums.RoomStatus
  }

  export type RoomtypeUpdateManyMutationInput = {
    roomType?: StringFieldUpdateOperationsInput | string
    roomPerNight?: FloatFieldUpdateOperationsInput | number
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
  }

  export type RoomtypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    roomPerNight?: FloatFieldUpdateOperationsInput | number
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
  }

  export type CatDetailBookingCreateInput = {
    CatInfo?: CatInfoCreateNestedOneWithoutCatDetailBookingInput
    Booking?: BookingCreateNestedOneWithoutCatDetailBookingInput
  }

  export type CatDetailBookingUncheckedCreateInput = {
    id?: number
    catInfoId?: number | null
    bookingId?: number | null
  }

  export type CatDetailBookingUpdateInput = {
    CatInfo?: CatInfoUpdateOneWithoutCatDetailBookingNestedInput
    Booking?: BookingUpdateOneWithoutCatDetailBookingNestedInput
  }

  export type CatDetailBookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    catInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CatDetailBookingCreateManyInput = {
    id?: number
    catInfoId?: number | null
    bookingId?: number | null
  }

  export type CatDetailBookingUpdateManyMutationInput = {

  }

  export type CatDetailBookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    catInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingRoomCreateInput = {
    Booking: BookingCreateNestedOneWithoutRoomsInput
    Roomtype?: RoomtypeCreateNestedOneWithoutBookingInput
  }

  export type BookingRoomUncheckedCreateInput = {
    bookingId: number
    roomtypeId: number
  }

  export type BookingRoomUpdateInput = {
    Booking?: BookingUpdateOneRequiredWithoutRoomsNestedInput
    Roomtype?: RoomtypeUpdateOneWithoutBookingNestedInput
  }

  export type BookingRoomUncheckedUpdateInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    roomtypeId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingRoomCreateManyInput = {
    bookingId: number
    roomtypeId: number
  }

  export type BookingRoomUpdateManyMutationInput = {

  }

  export type BookingRoomUncheckedUpdateManyInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
    roomtypeId?: IntFieldUpdateOperationsInput | number
  }

  export type SettingsCreateInput = {
    keyName: string
    keyValue: string
    description?: string | null
  }

  export type SettingsUncheckedCreateInput = {
    id?: number
    keyName: string
    keyValue: string
    description?: string | null
  }

  export type SettingsUpdateInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsCreateManyInput = {
    id?: number
    keyName: string
    keyValue: string
    description?: string | null
  }

  export type SettingsUpdateManyMutationInput = {
    keyName?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyName?: StringFieldUpdateOperationsInput | string
    keyValue?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type CatInfoListRelationFilter = {
    every?: CatInfoWhereInput
    some?: CatInfoWhereInput
    none?: CatInfoWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CatInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    address?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    address?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    address?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CatDetailBookingListRelationFilter = {
    every?: CatDetailBookingWhereInput
    some?: CatDetailBookingWhereInput
    none?: CatDetailBookingWhereInput
  }

  export type CatDetailBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CatInfoOrderByRelevanceInput = {
    fields: CatInfoOrderByRelevanceFieldEnum | CatInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CatInfoCountOrderByAggregateInput = {
    id?: SortOrder
    catName?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    healthInfo?: SortOrder
    userId?: SortOrder
  }

  export type CatInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CatInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    catName?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    healthInfo?: SortOrder
    userId?: SortOrder
  }

  export type CatInfoMinOrderByAggregateInput = {
    id?: SortOrder
    catName?: SortOrder
    age?: SortOrder
    breed?: SortOrder
    healthInfo?: SortOrder
    userId?: SortOrder
  }

  export type CatInfoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BookingRoomListRelationFilter = {
    every?: BookingRoomWhereInput
    some?: BookingRoomWhereInput
    none?: BookingRoomWhereInput
  }

  export type BookingRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    totalPrice?: SortOrder
    bookingStatus?: SortOrder
    userId?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    totalPrice?: SortOrder
    bookingStatus?: SortOrder
    userId?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    totalPrice?: SortOrder
    bookingStatus?: SortOrder
    userId?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type RoomtypeOrderByRelevanceInput = {
    fields: RoomtypeOrderByRelevanceFieldEnum | RoomtypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomtypeCountOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    roomPerNight?: SortOrder
    roomStatus?: SortOrder
  }

  export type RoomtypeAvgOrderByAggregateInput = {
    id?: SortOrder
    roomPerNight?: SortOrder
  }

  export type RoomtypeMaxOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    roomPerNight?: SortOrder
    roomStatus?: SortOrder
  }

  export type RoomtypeMinOrderByAggregateInput = {
    id?: SortOrder
    roomType?: SortOrder
    roomPerNight?: SortOrder
    roomStatus?: SortOrder
  }

  export type RoomtypeSumOrderByAggregateInput = {
    id?: SortOrder
    roomPerNight?: SortOrder
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type CatInfoNullableScalarRelationFilter = {
    is?: CatInfoWhereInput | null
    isNot?: CatInfoWhereInput | null
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type CatDetailBookingCatInfoIdBookingIdCompoundUniqueInput = {
    catInfoId: number
    bookingId: number
  }

  export type CatDetailBookingCountOrderByAggregateInput = {
    id?: SortOrder
    catInfoId?: SortOrder
    bookingId?: SortOrder
  }

  export type CatDetailBookingAvgOrderByAggregateInput = {
    id?: SortOrder
    catInfoId?: SortOrder
    bookingId?: SortOrder
  }

  export type CatDetailBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    catInfoId?: SortOrder
    bookingId?: SortOrder
  }

  export type CatDetailBookingMinOrderByAggregateInput = {
    id?: SortOrder
    catInfoId?: SortOrder
    bookingId?: SortOrder
  }

  export type CatDetailBookingSumOrderByAggregateInput = {
    id?: SortOrder
    catInfoId?: SortOrder
    bookingId?: SortOrder
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type RoomtypeNullableScalarRelationFilter = {
    is?: RoomtypeWhereInput | null
    isNot?: RoomtypeWhereInput | null
  }

  export type BookingRoomBookingIdRoomtypeIdCompoundUniqueInput = {
    bookingId: number
    roomtypeId: number
  }

  export type BookingRoomCountOrderByAggregateInput = {
    bookingId?: SortOrder
    roomtypeId?: SortOrder
  }

  export type BookingRoomAvgOrderByAggregateInput = {
    bookingId?: SortOrder
    roomtypeId?: SortOrder
  }

  export type BookingRoomMaxOrderByAggregateInput = {
    bookingId?: SortOrder
    roomtypeId?: SortOrder
  }

  export type BookingRoomMinOrderByAggregateInput = {
    bookingId?: SortOrder
    roomtypeId?: SortOrder
  }

  export type BookingRoomSumOrderByAggregateInput = {
    bookingId?: SortOrder
    roomtypeId?: SortOrder
  }

  export type SettingsOrderByRelevanceInput = {
    fields: SettingsOrderByRelevanceFieldEnum | SettingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    keyValue?: SortOrder
    description?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    keyValue?: SortOrder
    description?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    keyName?: SortOrder
    keyValue?: SortOrder
    description?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CatInfoCreateNestedManyWithoutUserInput = {
    create?: XOR<CatInfoCreateWithoutUserInput, CatInfoUncheckedCreateWithoutUserInput> | CatInfoCreateWithoutUserInput[] | CatInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CatInfoCreateOrConnectWithoutUserInput | CatInfoCreateOrConnectWithoutUserInput[]
    createMany?: CatInfoCreateManyUserInputEnvelope
    connect?: CatInfoWhereUniqueInput | CatInfoWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CatInfoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CatInfoCreateWithoutUserInput, CatInfoUncheckedCreateWithoutUserInput> | CatInfoCreateWithoutUserInput[] | CatInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CatInfoCreateOrConnectWithoutUserInput | CatInfoCreateOrConnectWithoutUserInput[]
    createMany?: CatInfoCreateManyUserInputEnvelope
    connect?: CatInfoWhereUniqueInput | CatInfoWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CatInfoUpdateManyWithoutUserNestedInput = {
    create?: XOR<CatInfoCreateWithoutUserInput, CatInfoUncheckedCreateWithoutUserInput> | CatInfoCreateWithoutUserInput[] | CatInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CatInfoCreateOrConnectWithoutUserInput | CatInfoCreateOrConnectWithoutUserInput[]
    upsert?: CatInfoUpsertWithWhereUniqueWithoutUserInput | CatInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CatInfoCreateManyUserInputEnvelope
    set?: CatInfoWhereUniqueInput | CatInfoWhereUniqueInput[]
    disconnect?: CatInfoWhereUniqueInput | CatInfoWhereUniqueInput[]
    delete?: CatInfoWhereUniqueInput | CatInfoWhereUniqueInput[]
    connect?: CatInfoWhereUniqueInput | CatInfoWhereUniqueInput[]
    update?: CatInfoUpdateWithWhereUniqueWithoutUserInput | CatInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CatInfoUpdateManyWithWhereWithoutUserInput | CatInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CatInfoScalarWhereInput | CatInfoScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CatInfoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CatInfoCreateWithoutUserInput, CatInfoUncheckedCreateWithoutUserInput> | CatInfoCreateWithoutUserInput[] | CatInfoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CatInfoCreateOrConnectWithoutUserInput | CatInfoCreateOrConnectWithoutUserInput[]
    upsert?: CatInfoUpsertWithWhereUniqueWithoutUserInput | CatInfoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CatInfoCreateManyUserInputEnvelope
    set?: CatInfoWhereUniqueInput | CatInfoWhereUniqueInput[]
    disconnect?: CatInfoWhereUniqueInput | CatInfoWhereUniqueInput[]
    delete?: CatInfoWhereUniqueInput | CatInfoWhereUniqueInput[]
    connect?: CatInfoWhereUniqueInput | CatInfoWhereUniqueInput[]
    update?: CatInfoUpdateWithWhereUniqueWithoutUserInput | CatInfoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CatInfoUpdateManyWithWhereWithoutUserInput | CatInfoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CatInfoScalarWhereInput | CatInfoScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCatInfoInput = {
    create?: XOR<UserCreateWithoutCatInfoInput, UserUncheckedCreateWithoutCatInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutCatInfoInput
    connect?: UserWhereUniqueInput
  }

  export type CatDetailBookingCreateNestedManyWithoutCatInfoInput = {
    create?: XOR<CatDetailBookingCreateWithoutCatInfoInput, CatDetailBookingUncheckedCreateWithoutCatInfoInput> | CatDetailBookingCreateWithoutCatInfoInput[] | CatDetailBookingUncheckedCreateWithoutCatInfoInput[]
    connectOrCreate?: CatDetailBookingCreateOrConnectWithoutCatInfoInput | CatDetailBookingCreateOrConnectWithoutCatInfoInput[]
    createMany?: CatDetailBookingCreateManyCatInfoInputEnvelope
    connect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
  }

  export type CatDetailBookingUncheckedCreateNestedManyWithoutCatInfoInput = {
    create?: XOR<CatDetailBookingCreateWithoutCatInfoInput, CatDetailBookingUncheckedCreateWithoutCatInfoInput> | CatDetailBookingCreateWithoutCatInfoInput[] | CatDetailBookingUncheckedCreateWithoutCatInfoInput[]
    connectOrCreate?: CatDetailBookingCreateOrConnectWithoutCatInfoInput | CatDetailBookingCreateOrConnectWithoutCatInfoInput[]
    createMany?: CatDetailBookingCreateManyCatInfoInputEnvelope
    connect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCatInfoNestedInput = {
    create?: XOR<UserCreateWithoutCatInfoInput, UserUncheckedCreateWithoutCatInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutCatInfoInput
    upsert?: UserUpsertWithoutCatInfoInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCatInfoInput, UserUpdateWithoutCatInfoInput>, UserUncheckedUpdateWithoutCatInfoInput>
  }

  export type CatDetailBookingUpdateManyWithoutCatInfoNestedInput = {
    create?: XOR<CatDetailBookingCreateWithoutCatInfoInput, CatDetailBookingUncheckedCreateWithoutCatInfoInput> | CatDetailBookingCreateWithoutCatInfoInput[] | CatDetailBookingUncheckedCreateWithoutCatInfoInput[]
    connectOrCreate?: CatDetailBookingCreateOrConnectWithoutCatInfoInput | CatDetailBookingCreateOrConnectWithoutCatInfoInput[]
    upsert?: CatDetailBookingUpsertWithWhereUniqueWithoutCatInfoInput | CatDetailBookingUpsertWithWhereUniqueWithoutCatInfoInput[]
    createMany?: CatDetailBookingCreateManyCatInfoInputEnvelope
    set?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    disconnect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    delete?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    connect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    update?: CatDetailBookingUpdateWithWhereUniqueWithoutCatInfoInput | CatDetailBookingUpdateWithWhereUniqueWithoutCatInfoInput[]
    updateMany?: CatDetailBookingUpdateManyWithWhereWithoutCatInfoInput | CatDetailBookingUpdateManyWithWhereWithoutCatInfoInput[]
    deleteMany?: CatDetailBookingScalarWhereInput | CatDetailBookingScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CatDetailBookingUncheckedUpdateManyWithoutCatInfoNestedInput = {
    create?: XOR<CatDetailBookingCreateWithoutCatInfoInput, CatDetailBookingUncheckedCreateWithoutCatInfoInput> | CatDetailBookingCreateWithoutCatInfoInput[] | CatDetailBookingUncheckedCreateWithoutCatInfoInput[]
    connectOrCreate?: CatDetailBookingCreateOrConnectWithoutCatInfoInput | CatDetailBookingCreateOrConnectWithoutCatInfoInput[]
    upsert?: CatDetailBookingUpsertWithWhereUniqueWithoutCatInfoInput | CatDetailBookingUpsertWithWhereUniqueWithoutCatInfoInput[]
    createMany?: CatDetailBookingCreateManyCatInfoInputEnvelope
    set?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    disconnect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    delete?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    connect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    update?: CatDetailBookingUpdateWithWhereUniqueWithoutCatInfoInput | CatDetailBookingUpdateWithWhereUniqueWithoutCatInfoInput[]
    updateMany?: CatDetailBookingUpdateManyWithWhereWithoutCatInfoInput | CatDetailBookingUpdateManyWithWhereWithoutCatInfoInput[]
    deleteMany?: CatDetailBookingScalarWhereInput | CatDetailBookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    connect?: UserWhereUniqueInput
  }

  export type BookingRoomCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
  }

  export type CatDetailBookingCreateNestedManyWithoutBookingInput = {
    create?: XOR<CatDetailBookingCreateWithoutBookingInput, CatDetailBookingUncheckedCreateWithoutBookingInput> | CatDetailBookingCreateWithoutBookingInput[] | CatDetailBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CatDetailBookingCreateOrConnectWithoutBookingInput | CatDetailBookingCreateOrConnectWithoutBookingInput[]
    createMany?: CatDetailBookingCreateManyBookingInputEnvelope
    connect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
  }

  export type BookingRoomUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
  }

  export type CatDetailBookingUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<CatDetailBookingCreateWithoutBookingInput, CatDetailBookingUncheckedCreateWithoutBookingInput> | CatDetailBookingCreateWithoutBookingInput[] | CatDetailBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CatDetailBookingCreateOrConnectWithoutBookingInput | CatDetailBookingCreateOrConnectWithoutBookingInput[]
    createMany?: CatDetailBookingCreateManyBookingInputEnvelope
    connect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutBookingNestedInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    upsert?: UserUpsertWithoutBookingInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingInput, UserUpdateWithoutBookingInput>, UserUncheckedUpdateWithoutBookingInput>
  }

  export type BookingRoomUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    upsert?: BookingRoomUpsertWithWhereUniqueWithoutBookingInput | BookingRoomUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    set?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    disconnect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    delete?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    update?: BookingRoomUpdateWithWhereUniqueWithoutBookingInput | BookingRoomUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingRoomUpdateManyWithWhereWithoutBookingInput | BookingRoomUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
  }

  export type CatDetailBookingUpdateManyWithoutBookingNestedInput = {
    create?: XOR<CatDetailBookingCreateWithoutBookingInput, CatDetailBookingUncheckedCreateWithoutBookingInput> | CatDetailBookingCreateWithoutBookingInput[] | CatDetailBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CatDetailBookingCreateOrConnectWithoutBookingInput | CatDetailBookingCreateOrConnectWithoutBookingInput[]
    upsert?: CatDetailBookingUpsertWithWhereUniqueWithoutBookingInput | CatDetailBookingUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: CatDetailBookingCreateManyBookingInputEnvelope
    set?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    disconnect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    delete?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    connect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    update?: CatDetailBookingUpdateWithWhereUniqueWithoutBookingInput | CatDetailBookingUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: CatDetailBookingUpdateManyWithWhereWithoutBookingInput | CatDetailBookingUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: CatDetailBookingScalarWhereInput | CatDetailBookingScalarWhereInput[]
  }

  export type BookingRoomUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput> | BookingRoomCreateWithoutBookingInput[] | BookingRoomUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutBookingInput | BookingRoomCreateOrConnectWithoutBookingInput[]
    upsert?: BookingRoomUpsertWithWhereUniqueWithoutBookingInput | BookingRoomUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingRoomCreateManyBookingInputEnvelope
    set?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    disconnect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    delete?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    update?: BookingRoomUpdateWithWhereUniqueWithoutBookingInput | BookingRoomUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingRoomUpdateManyWithWhereWithoutBookingInput | BookingRoomUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
  }

  export type CatDetailBookingUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<CatDetailBookingCreateWithoutBookingInput, CatDetailBookingUncheckedCreateWithoutBookingInput> | CatDetailBookingCreateWithoutBookingInput[] | CatDetailBookingUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CatDetailBookingCreateOrConnectWithoutBookingInput | CatDetailBookingCreateOrConnectWithoutBookingInput[]
    upsert?: CatDetailBookingUpsertWithWhereUniqueWithoutBookingInput | CatDetailBookingUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: CatDetailBookingCreateManyBookingInputEnvelope
    set?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    disconnect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    delete?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    connect?: CatDetailBookingWhereUniqueInput | CatDetailBookingWhereUniqueInput[]
    update?: CatDetailBookingUpdateWithWhereUniqueWithoutBookingInput | CatDetailBookingUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: CatDetailBookingUpdateManyWithWhereWithoutBookingInput | CatDetailBookingUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: CatDetailBookingScalarWhereInput | CatDetailBookingScalarWhereInput[]
  }

  export type BookingRoomCreateNestedManyWithoutRoomtypeInput = {
    create?: XOR<BookingRoomCreateWithoutRoomtypeInput, BookingRoomUncheckedCreateWithoutRoomtypeInput> | BookingRoomCreateWithoutRoomtypeInput[] | BookingRoomUncheckedCreateWithoutRoomtypeInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutRoomtypeInput | BookingRoomCreateOrConnectWithoutRoomtypeInput[]
    createMany?: BookingRoomCreateManyRoomtypeInputEnvelope
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
  }

  export type BookingRoomUncheckedCreateNestedManyWithoutRoomtypeInput = {
    create?: XOR<BookingRoomCreateWithoutRoomtypeInput, BookingRoomUncheckedCreateWithoutRoomtypeInput> | BookingRoomCreateWithoutRoomtypeInput[] | BookingRoomUncheckedCreateWithoutRoomtypeInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutRoomtypeInput | BookingRoomCreateOrConnectWithoutRoomtypeInput[]
    createMany?: BookingRoomCreateManyRoomtypeInputEnvelope
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type BookingRoomUpdateManyWithoutRoomtypeNestedInput = {
    create?: XOR<BookingRoomCreateWithoutRoomtypeInput, BookingRoomUncheckedCreateWithoutRoomtypeInput> | BookingRoomCreateWithoutRoomtypeInput[] | BookingRoomUncheckedCreateWithoutRoomtypeInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutRoomtypeInput | BookingRoomCreateOrConnectWithoutRoomtypeInput[]
    upsert?: BookingRoomUpsertWithWhereUniqueWithoutRoomtypeInput | BookingRoomUpsertWithWhereUniqueWithoutRoomtypeInput[]
    createMany?: BookingRoomCreateManyRoomtypeInputEnvelope
    set?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    disconnect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    delete?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    update?: BookingRoomUpdateWithWhereUniqueWithoutRoomtypeInput | BookingRoomUpdateWithWhereUniqueWithoutRoomtypeInput[]
    updateMany?: BookingRoomUpdateManyWithWhereWithoutRoomtypeInput | BookingRoomUpdateManyWithWhereWithoutRoomtypeInput[]
    deleteMany?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
  }

  export type BookingRoomUncheckedUpdateManyWithoutRoomtypeNestedInput = {
    create?: XOR<BookingRoomCreateWithoutRoomtypeInput, BookingRoomUncheckedCreateWithoutRoomtypeInput> | BookingRoomCreateWithoutRoomtypeInput[] | BookingRoomUncheckedCreateWithoutRoomtypeInput[]
    connectOrCreate?: BookingRoomCreateOrConnectWithoutRoomtypeInput | BookingRoomCreateOrConnectWithoutRoomtypeInput[]
    upsert?: BookingRoomUpsertWithWhereUniqueWithoutRoomtypeInput | BookingRoomUpsertWithWhereUniqueWithoutRoomtypeInput[]
    createMany?: BookingRoomCreateManyRoomtypeInputEnvelope
    set?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    disconnect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    delete?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    connect?: BookingRoomWhereUniqueInput | BookingRoomWhereUniqueInput[]
    update?: BookingRoomUpdateWithWhereUniqueWithoutRoomtypeInput | BookingRoomUpdateWithWhereUniqueWithoutRoomtypeInput[]
    updateMany?: BookingRoomUpdateManyWithWhereWithoutRoomtypeInput | BookingRoomUpdateManyWithWhereWithoutRoomtypeInput[]
    deleteMany?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
  }

  export type CatInfoCreateNestedOneWithoutCatDetailBookingInput = {
    create?: XOR<CatInfoCreateWithoutCatDetailBookingInput, CatInfoUncheckedCreateWithoutCatDetailBookingInput>
    connectOrCreate?: CatInfoCreateOrConnectWithoutCatDetailBookingInput
    connect?: CatInfoWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutCatDetailBookingInput = {
    create?: XOR<BookingCreateWithoutCatDetailBookingInput, BookingUncheckedCreateWithoutCatDetailBookingInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCatDetailBookingInput
    connect?: BookingWhereUniqueInput
  }

  export type CatInfoUpdateOneWithoutCatDetailBookingNestedInput = {
    create?: XOR<CatInfoCreateWithoutCatDetailBookingInput, CatInfoUncheckedCreateWithoutCatDetailBookingInput>
    connectOrCreate?: CatInfoCreateOrConnectWithoutCatDetailBookingInput
    upsert?: CatInfoUpsertWithoutCatDetailBookingInput
    disconnect?: CatInfoWhereInput | boolean
    delete?: CatInfoWhereInput | boolean
    connect?: CatInfoWhereUniqueInput
    update?: XOR<XOR<CatInfoUpdateToOneWithWhereWithoutCatDetailBookingInput, CatInfoUpdateWithoutCatDetailBookingInput>, CatInfoUncheckedUpdateWithoutCatDetailBookingInput>
  }

  export type BookingUpdateOneWithoutCatDetailBookingNestedInput = {
    create?: XOR<BookingCreateWithoutCatDetailBookingInput, BookingUncheckedCreateWithoutCatDetailBookingInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCatDetailBookingInput
    upsert?: BookingUpsertWithoutCatDetailBookingInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutCatDetailBookingInput, BookingUpdateWithoutCatDetailBookingInput>, BookingUncheckedUpdateWithoutCatDetailBookingInput>
  }

  export type BookingCreateNestedOneWithoutRoomsInput = {
    create?: XOR<BookingCreateWithoutRoomsInput, BookingUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRoomsInput
    connect?: BookingWhereUniqueInput
  }

  export type RoomtypeCreateNestedOneWithoutBookingInput = {
    create?: XOR<RoomtypeCreateWithoutBookingInput, RoomtypeUncheckedCreateWithoutBookingInput>
    connectOrCreate?: RoomtypeCreateOrConnectWithoutBookingInput
    connect?: RoomtypeWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<BookingCreateWithoutRoomsInput, BookingUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutRoomsInput
    upsert?: BookingUpsertWithoutRoomsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutRoomsInput, BookingUpdateWithoutRoomsInput>, BookingUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomtypeUpdateOneWithoutBookingNestedInput = {
    create?: XOR<RoomtypeCreateWithoutBookingInput, RoomtypeUncheckedCreateWithoutBookingInput>
    connectOrCreate?: RoomtypeCreateOrConnectWithoutBookingInput
    upsert?: RoomtypeUpsertWithoutBookingInput
    disconnect?: RoomtypeWhereInput | boolean
    delete?: RoomtypeWhereInput | boolean
    connect?: RoomtypeWhereUniqueInput
    update?: XOR<XOR<RoomtypeUpdateToOneWithWhereWithoutBookingInput, RoomtypeUpdateWithoutBookingInput>, RoomtypeUncheckedUpdateWithoutBookingInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type CatInfoCreateWithoutUserInput = {
    catName: string
    age: string
    breed: string
    healthInfo: string
    catDetailBooking?: CatDetailBookingCreateNestedManyWithoutCatInfoInput
  }

  export type CatInfoUncheckedCreateWithoutUserInput = {
    id?: number
    catName: string
    age: string
    breed: string
    healthInfo: string
    catDetailBooking?: CatDetailBookingUncheckedCreateNestedManyWithoutCatInfoInput
  }

  export type CatInfoCreateOrConnectWithoutUserInput = {
    where: CatInfoWhereUniqueInput
    create: XOR<CatInfoCreateWithoutUserInput, CatInfoUncheckedCreateWithoutUserInput>
  }

  export type CatInfoCreateManyUserInputEnvelope = {
    data: CatInfoCreateManyUserInput | CatInfoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutUserInput = {
    checkInDate: Date | string
    checkOutDate: Date | string
    totalPrice: number
    bookingStatus: string
    rooms?: BookingRoomCreateNestedManyWithoutBookingInput
    catDetailBooking?: CatDetailBookingCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    checkInDate: Date | string
    checkOutDate: Date | string
    totalPrice: number
    bookingStatus: string
    rooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
    catDetailBooking?: CatDetailBookingUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CatInfoUpsertWithWhereUniqueWithoutUserInput = {
    where: CatInfoWhereUniqueInput
    update: XOR<CatInfoUpdateWithoutUserInput, CatInfoUncheckedUpdateWithoutUserInput>
    create: XOR<CatInfoCreateWithoutUserInput, CatInfoUncheckedCreateWithoutUserInput>
  }

  export type CatInfoUpdateWithWhereUniqueWithoutUserInput = {
    where: CatInfoWhereUniqueInput
    data: XOR<CatInfoUpdateWithoutUserInput, CatInfoUncheckedUpdateWithoutUserInput>
  }

  export type CatInfoUpdateManyWithWhereWithoutUserInput = {
    where: CatInfoScalarWhereInput
    data: XOR<CatInfoUpdateManyMutationInput, CatInfoUncheckedUpdateManyWithoutUserInput>
  }

  export type CatInfoScalarWhereInput = {
    AND?: CatInfoScalarWhereInput | CatInfoScalarWhereInput[]
    OR?: CatInfoScalarWhereInput[]
    NOT?: CatInfoScalarWhereInput | CatInfoScalarWhereInput[]
    id?: IntFilter<"CatInfo"> | number
    catName?: StringFilter<"CatInfo"> | string
    age?: StringFilter<"CatInfo"> | string
    breed?: StringFilter<"CatInfo"> | string
    healthInfo?: StringFilter<"CatInfo"> | string
    userId?: IntNullableFilter<"CatInfo"> | number | null
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    checkInDate?: DateTimeFilter<"Booking"> | Date | string
    checkOutDate?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    bookingStatus?: StringFilter<"Booking"> | string
    userId?: IntNullableFilter<"Booking"> | number | null
  }

  export type UserCreateWithoutCatInfoInput = {
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password: string
    address: string
    role?: $Enums.Role
    booking?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCatInfoInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password: string
    address: string
    role?: $Enums.Role
    booking?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCatInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCatInfoInput, UserUncheckedCreateWithoutCatInfoInput>
  }

  export type CatDetailBookingCreateWithoutCatInfoInput = {
    Booking?: BookingCreateNestedOneWithoutCatDetailBookingInput
  }

  export type CatDetailBookingUncheckedCreateWithoutCatInfoInput = {
    id?: number
    bookingId?: number | null
  }

  export type CatDetailBookingCreateOrConnectWithoutCatInfoInput = {
    where: CatDetailBookingWhereUniqueInput
    create: XOR<CatDetailBookingCreateWithoutCatInfoInput, CatDetailBookingUncheckedCreateWithoutCatInfoInput>
  }

  export type CatDetailBookingCreateManyCatInfoInputEnvelope = {
    data: CatDetailBookingCreateManyCatInfoInput | CatDetailBookingCreateManyCatInfoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCatInfoInput = {
    update: XOR<UserUpdateWithoutCatInfoInput, UserUncheckedUpdateWithoutCatInfoInput>
    create: XOR<UserCreateWithoutCatInfoInput, UserUncheckedCreateWithoutCatInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCatInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCatInfoInput, UserUncheckedUpdateWithoutCatInfoInput>
  }

  export type UserUpdateWithoutCatInfoInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    booking?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCatInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CatDetailBookingUpsertWithWhereUniqueWithoutCatInfoInput = {
    where: CatDetailBookingWhereUniqueInput
    update: XOR<CatDetailBookingUpdateWithoutCatInfoInput, CatDetailBookingUncheckedUpdateWithoutCatInfoInput>
    create: XOR<CatDetailBookingCreateWithoutCatInfoInput, CatDetailBookingUncheckedCreateWithoutCatInfoInput>
  }

  export type CatDetailBookingUpdateWithWhereUniqueWithoutCatInfoInput = {
    where: CatDetailBookingWhereUniqueInput
    data: XOR<CatDetailBookingUpdateWithoutCatInfoInput, CatDetailBookingUncheckedUpdateWithoutCatInfoInput>
  }

  export type CatDetailBookingUpdateManyWithWhereWithoutCatInfoInput = {
    where: CatDetailBookingScalarWhereInput
    data: XOR<CatDetailBookingUpdateManyMutationInput, CatDetailBookingUncheckedUpdateManyWithoutCatInfoInput>
  }

  export type CatDetailBookingScalarWhereInput = {
    AND?: CatDetailBookingScalarWhereInput | CatDetailBookingScalarWhereInput[]
    OR?: CatDetailBookingScalarWhereInput[]
    NOT?: CatDetailBookingScalarWhereInput | CatDetailBookingScalarWhereInput[]
    id?: IntFilter<"CatDetailBooking"> | number
    catInfoId?: IntNullableFilter<"CatDetailBooking"> | number | null
    bookingId?: IntNullableFilter<"CatDetailBooking"> | number | null
  }

  export type UserCreateWithoutBookingInput = {
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password: string
    address: string
    role?: $Enums.Role
    catInfo?: CatInfoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string | null
    password: string
    address: string
    role?: $Enums.Role
    catInfo?: CatInfoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
  }

  export type BookingRoomCreateWithoutBookingInput = {
    Roomtype?: RoomtypeCreateNestedOneWithoutBookingInput
  }

  export type BookingRoomUncheckedCreateWithoutBookingInput = {
    roomtypeId: number
  }

  export type BookingRoomCreateOrConnectWithoutBookingInput = {
    where: BookingRoomWhereUniqueInput
    create: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput>
  }

  export type BookingRoomCreateManyBookingInputEnvelope = {
    data: BookingRoomCreateManyBookingInput | BookingRoomCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type CatDetailBookingCreateWithoutBookingInput = {
    CatInfo?: CatInfoCreateNestedOneWithoutCatDetailBookingInput
  }

  export type CatDetailBookingUncheckedCreateWithoutBookingInput = {
    id?: number
    catInfoId?: number | null
  }

  export type CatDetailBookingCreateOrConnectWithoutBookingInput = {
    where: CatDetailBookingWhereUniqueInput
    create: XOR<CatDetailBookingCreateWithoutBookingInput, CatDetailBookingUncheckedCreateWithoutBookingInput>
  }

  export type CatDetailBookingCreateManyBookingInputEnvelope = {
    data: CatDetailBookingCreateManyBookingInput | CatDetailBookingCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingInput = {
    update: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
  }

  export type UserUpdateWithoutBookingInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    catInfo?: CatInfoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    catInfo?: CatInfoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingRoomUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingRoomWhereUniqueInput
    update: XOR<BookingRoomUpdateWithoutBookingInput, BookingRoomUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingRoomCreateWithoutBookingInput, BookingRoomUncheckedCreateWithoutBookingInput>
  }

  export type BookingRoomUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingRoomWhereUniqueInput
    data: XOR<BookingRoomUpdateWithoutBookingInput, BookingRoomUncheckedUpdateWithoutBookingInput>
  }

  export type BookingRoomUpdateManyWithWhereWithoutBookingInput = {
    where: BookingRoomScalarWhereInput
    data: XOR<BookingRoomUpdateManyMutationInput, BookingRoomUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingRoomScalarWhereInput = {
    AND?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
    OR?: BookingRoomScalarWhereInput[]
    NOT?: BookingRoomScalarWhereInput | BookingRoomScalarWhereInput[]
    bookingId?: IntFilter<"BookingRoom"> | number
    roomtypeId?: IntFilter<"BookingRoom"> | number
  }

  export type CatDetailBookingUpsertWithWhereUniqueWithoutBookingInput = {
    where: CatDetailBookingWhereUniqueInput
    update: XOR<CatDetailBookingUpdateWithoutBookingInput, CatDetailBookingUncheckedUpdateWithoutBookingInput>
    create: XOR<CatDetailBookingCreateWithoutBookingInput, CatDetailBookingUncheckedCreateWithoutBookingInput>
  }

  export type CatDetailBookingUpdateWithWhereUniqueWithoutBookingInput = {
    where: CatDetailBookingWhereUniqueInput
    data: XOR<CatDetailBookingUpdateWithoutBookingInput, CatDetailBookingUncheckedUpdateWithoutBookingInput>
  }

  export type CatDetailBookingUpdateManyWithWhereWithoutBookingInput = {
    where: CatDetailBookingScalarWhereInput
    data: XOR<CatDetailBookingUpdateManyMutationInput, CatDetailBookingUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingRoomCreateWithoutRoomtypeInput = {
    Booking: BookingCreateNestedOneWithoutRoomsInput
  }

  export type BookingRoomUncheckedCreateWithoutRoomtypeInput = {
    bookingId: number
  }

  export type BookingRoomCreateOrConnectWithoutRoomtypeInput = {
    where: BookingRoomWhereUniqueInput
    create: XOR<BookingRoomCreateWithoutRoomtypeInput, BookingRoomUncheckedCreateWithoutRoomtypeInput>
  }

  export type BookingRoomCreateManyRoomtypeInputEnvelope = {
    data: BookingRoomCreateManyRoomtypeInput | BookingRoomCreateManyRoomtypeInput[]
    skipDuplicates?: boolean
  }

  export type BookingRoomUpsertWithWhereUniqueWithoutRoomtypeInput = {
    where: BookingRoomWhereUniqueInput
    update: XOR<BookingRoomUpdateWithoutRoomtypeInput, BookingRoomUncheckedUpdateWithoutRoomtypeInput>
    create: XOR<BookingRoomCreateWithoutRoomtypeInput, BookingRoomUncheckedCreateWithoutRoomtypeInput>
  }

  export type BookingRoomUpdateWithWhereUniqueWithoutRoomtypeInput = {
    where: BookingRoomWhereUniqueInput
    data: XOR<BookingRoomUpdateWithoutRoomtypeInput, BookingRoomUncheckedUpdateWithoutRoomtypeInput>
  }

  export type BookingRoomUpdateManyWithWhereWithoutRoomtypeInput = {
    where: BookingRoomScalarWhereInput
    data: XOR<BookingRoomUpdateManyMutationInput, BookingRoomUncheckedUpdateManyWithoutRoomtypeInput>
  }

  export type CatInfoCreateWithoutCatDetailBookingInput = {
    catName: string
    age: string
    breed: string
    healthInfo: string
    User?: UserCreateNestedOneWithoutCatInfoInput
  }

  export type CatInfoUncheckedCreateWithoutCatDetailBookingInput = {
    id?: number
    catName: string
    age: string
    breed: string
    healthInfo: string
    userId?: number | null
  }

  export type CatInfoCreateOrConnectWithoutCatDetailBookingInput = {
    where: CatInfoWhereUniqueInput
    create: XOR<CatInfoCreateWithoutCatDetailBookingInput, CatInfoUncheckedCreateWithoutCatDetailBookingInput>
  }

  export type BookingCreateWithoutCatDetailBookingInput = {
    checkInDate: Date | string
    checkOutDate: Date | string
    totalPrice: number
    bookingStatus: string
    User?: UserCreateNestedOneWithoutBookingInput
    rooms?: BookingRoomCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCatDetailBookingInput = {
    id?: number
    checkInDate: Date | string
    checkOutDate: Date | string
    totalPrice: number
    bookingStatus: string
    userId?: number | null
    rooms?: BookingRoomUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCatDetailBookingInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCatDetailBookingInput, BookingUncheckedCreateWithoutCatDetailBookingInput>
  }

  export type CatInfoUpsertWithoutCatDetailBookingInput = {
    update: XOR<CatInfoUpdateWithoutCatDetailBookingInput, CatInfoUncheckedUpdateWithoutCatDetailBookingInput>
    create: XOR<CatInfoCreateWithoutCatDetailBookingInput, CatInfoUncheckedCreateWithoutCatDetailBookingInput>
    where?: CatInfoWhereInput
  }

  export type CatInfoUpdateToOneWithWhereWithoutCatDetailBookingInput = {
    where?: CatInfoWhereInput
    data: XOR<CatInfoUpdateWithoutCatDetailBookingInput, CatInfoUncheckedUpdateWithoutCatDetailBookingInput>
  }

  export type CatInfoUpdateWithoutCatDetailBookingInput = {
    catName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    healthInfo?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutCatInfoNestedInput
  }

  export type CatInfoUncheckedUpdateWithoutCatDetailBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    catName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    healthInfo?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingUpsertWithoutCatDetailBookingInput = {
    update: XOR<BookingUpdateWithoutCatDetailBookingInput, BookingUncheckedUpdateWithoutCatDetailBookingInput>
    create: XOR<BookingCreateWithoutCatDetailBookingInput, BookingUncheckedCreateWithoutCatDetailBookingInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutCatDetailBookingInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutCatDetailBookingInput, BookingUncheckedUpdateWithoutCatDetailBookingInput>
  }

  export type BookingUpdateWithoutCatDetailBookingInput = {
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    bookingStatus?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutBookingNestedInput
    rooms?: BookingRoomUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCatDetailBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    bookingStatus?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    rooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateWithoutRoomsInput = {
    checkInDate: Date | string
    checkOutDate: Date | string
    totalPrice: number
    bookingStatus: string
    User?: UserCreateNestedOneWithoutBookingInput
    catDetailBooking?: CatDetailBookingCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutRoomsInput = {
    id?: number
    checkInDate: Date | string
    checkOutDate: Date | string
    totalPrice: number
    bookingStatus: string
    userId?: number | null
    catDetailBooking?: CatDetailBookingUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutRoomsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRoomsInput, BookingUncheckedCreateWithoutRoomsInput>
  }

  export type RoomtypeCreateWithoutBookingInput = {
    roomType: string
    roomPerNight: number
    roomStatus?: $Enums.RoomStatus
  }

  export type RoomtypeUncheckedCreateWithoutBookingInput = {
    id?: number
    roomType: string
    roomPerNight: number
    roomStatus?: $Enums.RoomStatus
  }

  export type RoomtypeCreateOrConnectWithoutBookingInput = {
    where: RoomtypeWhereUniqueInput
    create: XOR<RoomtypeCreateWithoutBookingInput, RoomtypeUncheckedCreateWithoutBookingInput>
  }

  export type BookingUpsertWithoutRoomsInput = {
    update: XOR<BookingUpdateWithoutRoomsInput, BookingUncheckedUpdateWithoutRoomsInput>
    create: XOR<BookingCreateWithoutRoomsInput, BookingUncheckedCreateWithoutRoomsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutRoomsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutRoomsInput, BookingUncheckedUpdateWithoutRoomsInput>
  }

  export type BookingUpdateWithoutRoomsInput = {
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    bookingStatus?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutBookingNestedInput
    catDetailBooking?: CatDetailBookingUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    bookingStatus?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    catDetailBooking?: CatDetailBookingUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type RoomtypeUpsertWithoutBookingInput = {
    update: XOR<RoomtypeUpdateWithoutBookingInput, RoomtypeUncheckedUpdateWithoutBookingInput>
    create: XOR<RoomtypeCreateWithoutBookingInput, RoomtypeUncheckedCreateWithoutBookingInput>
    where?: RoomtypeWhereInput
  }

  export type RoomtypeUpdateToOneWithWhereWithoutBookingInput = {
    where?: RoomtypeWhereInput
    data: XOR<RoomtypeUpdateWithoutBookingInput, RoomtypeUncheckedUpdateWithoutBookingInput>
  }

  export type RoomtypeUpdateWithoutBookingInput = {
    roomType?: StringFieldUpdateOperationsInput | string
    roomPerNight?: FloatFieldUpdateOperationsInput | number
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
  }

  export type RoomtypeUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomType?: StringFieldUpdateOperationsInput | string
    roomPerNight?: FloatFieldUpdateOperationsInput | number
    roomStatus?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
  }

  export type CatInfoCreateManyUserInput = {
    id?: number
    catName: string
    age: string
    breed: string
    healthInfo: string
  }

  export type BookingCreateManyUserInput = {
    id?: number
    checkInDate: Date | string
    checkOutDate: Date | string
    totalPrice: number
    bookingStatus: string
  }

  export type CatInfoUpdateWithoutUserInput = {
    catName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    healthInfo?: StringFieldUpdateOperationsInput | string
    catDetailBooking?: CatDetailBookingUpdateManyWithoutCatInfoNestedInput
  }

  export type CatInfoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    catName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    healthInfo?: StringFieldUpdateOperationsInput | string
    catDetailBooking?: CatDetailBookingUncheckedUpdateManyWithoutCatInfoNestedInput
  }

  export type CatInfoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    catName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    breed?: StringFieldUpdateOperationsInput | string
    healthInfo?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUpdateWithoutUserInput = {
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    bookingStatus?: StringFieldUpdateOperationsInput | string
    rooms?: BookingRoomUpdateManyWithoutBookingNestedInput
    catDetailBooking?: CatDetailBookingUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    bookingStatus?: StringFieldUpdateOperationsInput | string
    rooms?: BookingRoomUncheckedUpdateManyWithoutBookingNestedInput
    catDetailBooking?: CatDetailBookingUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    bookingStatus?: StringFieldUpdateOperationsInput | string
  }

  export type CatDetailBookingCreateManyCatInfoInput = {
    id?: number
    bookingId?: number | null
  }

  export type CatDetailBookingUpdateWithoutCatInfoInput = {
    Booking?: BookingUpdateOneWithoutCatDetailBookingNestedInput
  }

  export type CatDetailBookingUncheckedUpdateWithoutCatInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CatDetailBookingUncheckedUpdateManyWithoutCatInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingRoomCreateManyBookingInput = {
    roomtypeId: number
  }

  export type CatDetailBookingCreateManyBookingInput = {
    id?: number
    catInfoId?: number | null
  }

  export type BookingRoomUpdateWithoutBookingInput = {
    Roomtype?: RoomtypeUpdateOneWithoutBookingNestedInput
  }

  export type BookingRoomUncheckedUpdateWithoutBookingInput = {
    roomtypeId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingRoomUncheckedUpdateManyWithoutBookingInput = {
    roomtypeId?: IntFieldUpdateOperationsInput | number
  }

  export type CatDetailBookingUpdateWithoutBookingInput = {
    CatInfo?: CatInfoUpdateOneWithoutCatDetailBookingNestedInput
  }

  export type CatDetailBookingUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    catInfoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CatDetailBookingUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    catInfoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BookingRoomCreateManyRoomtypeInput = {
    bookingId: number
  }

  export type BookingRoomUpdateWithoutRoomtypeInput = {
    Booking?: BookingUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type BookingRoomUncheckedUpdateWithoutRoomtypeInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
  }

  export type BookingRoomUncheckedUpdateManyWithoutRoomtypeInput = {
    bookingId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}