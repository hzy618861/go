import * as $protobuf from "protobufjs";
/** Namespace coolcar. */
export namespace coolcar {

    /** Properties of a Location. */
    interface ILocation {

        /** Location latitude */
        latitude?: (number|null);

        /** Location longitude */
        longitude?: (number|null);
    }

    /** Represents a Location. */
    class Location implements ILocation {

        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: coolcar.ILocation);

        /** Location latitude. */
        public latitude: number;

        /** Location longitude. */
        public longitude: number;

        /**
         * Encodes the specified Location message. Does not implicitly {@link coolcar.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coolcar.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: { [k: string]: any }): coolcar.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coolcar.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** TestStatus enum. */
    enum TestStatus {
        TS_NOT_SPECIFIED = 0,
        A = 1,
        B = 2,
        C = 3
    }

    /** Properties of a Test. */
    interface ITest {

        /** Test start */
        start?: (string|null);

        /** Test startPos */
        startPos?: (coolcar.ILocation|null);

        /** Test endPos */
        endPos?: (coolcar.ILocation[]|null);

        /** Test end */
        end?: (string|null);

        /** Test durationSec */
        durationSec?: (number|null);

        /** Test feeCent */
        feeCent?: (number|null);

        /** Test status */
        status?: (coolcar.TestStatus|null);
    }

    /** Represents a Test. */
    class Test implements ITest {

        /**
         * Constructs a new Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: coolcar.ITest);

        /** Test start. */
        public start: string;

        /** Test startPos. */
        public startPos?: (coolcar.ILocation|null);

        /** Test endPos. */
        public endPos: coolcar.ILocation[];

        /** Test end. */
        public end: string;

        /** Test durationSec. */
        public durationSec: number;

        /** Test feeCent. */
        public feeCent: number;

        /** Test status. */
        public status: coolcar.TestStatus;

        /**
         * Encodes the specified Test message. Does not implicitly {@link coolcar.Test.verify|verify} messages.
         * @param message Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coolcar.ITest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Creates a Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Test
         */
        public static fromObject(object: { [k: string]: any }): coolcar.Test;

        /**
         * Creates a plain object from a Test message. Also converts values to other types if specified.
         * @param message Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coolcar.Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTestRequest. */
    interface IGetTestRequest {

        /** GetTestRequest id */
        id?: (string|null);
    }

    /** Represents a GetTestRequest. */
    class GetTestRequest implements IGetTestRequest {

        /**
         * Constructs a new GetTestRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: coolcar.IGetTestRequest);

        /** GetTestRequest id. */
        public id: string;

        /**
         * Encodes the specified GetTestRequest message. Does not implicitly {@link coolcar.GetTestRequest.verify|verify} messages.
         * @param message GetTestRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coolcar.IGetTestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Creates a GetTestRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTestRequest
         */
        public static fromObject(object: { [k: string]: any }): coolcar.GetTestRequest;

        /**
         * Creates a plain object from a GetTestRequest message. Also converts values to other types if specified.
         * @param message GetTestRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coolcar.GetTestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTestRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTestResponse. */
    interface IGetTestResponse {

        /** GetTestResponse id */
        id?: (string|null);

        /** GetTestResponse test */
        test?: (coolcar.ITest|null);
    }

    /** Represents a GetTestResponse. */
    class GetTestResponse implements IGetTestResponse {

        /**
         * Constructs a new GetTestResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: coolcar.IGetTestResponse);

        /** GetTestResponse id. */
        public id: string;

        /** GetTestResponse test. */
        public test?: (coolcar.ITest|null);

        /**
         * Encodes the specified GetTestResponse message. Does not implicitly {@link coolcar.GetTestResponse.verify|verify} messages.
         * @param message GetTestResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: coolcar.IGetTestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Creates a GetTestResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTestResponse
         */
        public static fromObject(object: { [k: string]: any }): coolcar.GetTestResponse;

        /**
         * Creates a plain object from a GetTestResponse message. Also converts values to other types if specified.
         * @param message GetTestResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: coolcar.GetTestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTestResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a TestService */
    class TestService extends $protobuf.rpc.Service {

        /**
         * Constructs a new TestService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Calls getTest.
         * @param request GetTestRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetTestResponse
         */
        public getTest(request: coolcar.IGetTestRequest, callback: coolcar.TestService.getTestCallback): void;

        /**
         * Calls getTest.
         * @param request GetTestRequest message or plain object
         * @returns Promise
         */
        public getTest(request: coolcar.IGetTestRequest): Promise<coolcar.GetTestResponse>;
    }

    namespace TestService {

        /**
         * Callback as used by {@link coolcar.TestService#getTest}.
         * @param error Error, if any
         * @param [response] GetTestResponse
         */
        type getTestCallback = (error: (Error|null), response?: coolcar.GetTestResponse) => void;
    }
}
