import * as $protobuf from "protobufjs";

// Common aliases
const $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const coolcar = $root.coolcar = (() => {

    /**
     * Namespace coolcar.
     * @exports coolcar
     * @namespace
     */
    const coolcar = {};

    coolcar.Location = (function() {

        /**
         * Properties of a Location.
         * @memberof coolcar
         * @interface ILocation
         * @property {number|null} [latitude] Location latitude
         * @property {number|null} [longitude] Location longitude
         */

        /**
         * Constructs a new Location.
         * @memberof coolcar
         * @classdesc Represents a Location.
         * @implements ILocation
         * @constructor
         * @param {coolcar.ILocation=} [properties] Properties to set
         */
        function Location(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Location latitude.
         * @member {number} latitude
         * @memberof coolcar.Location
         * @instance
         */
        Location.prototype.latitude = 0;

        /**
         * Location longitude.
         * @member {number} longitude
         * @memberof coolcar.Location
         * @instance
         */
        Location.prototype.longitude = 0;

        /**
         * Encodes the specified Location message. Does not implicitly {@link coolcar.Location.verify|verify} messages.
         * @function encode
         * @memberof coolcar.Location
         * @static
         * @param {coolcar.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.latitude);
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.longitude);
            return writer;
        };

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coolcar.Location
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coolcar.Location} Location
         */
        Location.fromObject = function fromObject(object) {
            if (object instanceof $root.coolcar.Location)
                return object;
            let message = new $root.coolcar.Location();
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            return message;
        };

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coolcar.Location
         * @static
         * @param {coolcar.Location} message Location
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Location.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.latitude = 0;
                object.longitude = 0;
            }
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            return object;
        };

        /**
         * Converts this Location to JSON.
         * @function toJSON
         * @memberof coolcar.Location
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Location.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Location;
    })();

    /**
     * TestStatus enum.
     * @name coolcar.TestStatus
     * @enum {number}
     * @property {number} TS_NOT_SPECIFIED=0 TS_NOT_SPECIFIED value
     * @property {number} A=1 A value
     * @property {number} B=2 B value
     * @property {number} C=3 C value
     */
    coolcar.TestStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TS_NOT_SPECIFIED"] = 0;
        values[valuesById[1] = "A"] = 1;
        values[valuesById[2] = "B"] = 2;
        values[valuesById[3] = "C"] = 3;
        return values;
    })();

    coolcar.Test = (function() {

        /**
         * Properties of a Test.
         * @memberof coolcar
         * @interface ITest
         * @property {string|null} [start] Test start
         * @property {coolcar.ILocation|null} [startPos] Test startPos
         * @property {Array.<coolcar.ILocation>|null} [endPos] Test endPos
         * @property {string|null} [end] Test end
         * @property {number|null} [durationSec] Test durationSec
         * @property {number|null} [feeCent] Test feeCent
         * @property {coolcar.TestStatus|null} [status] Test status
         */

        /**
         * Constructs a new Test.
         * @memberof coolcar
         * @classdesc Represents a Test.
         * @implements ITest
         * @constructor
         * @param {coolcar.ITest=} [properties] Properties to set
         */
        function Test(properties) {
            this.endPos = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Test start.
         * @member {string} start
         * @memberof coolcar.Test
         * @instance
         */
        Test.prototype.start = "";

        /**
         * Test startPos.
         * @member {coolcar.ILocation|null|undefined} startPos
         * @memberof coolcar.Test
         * @instance
         */
        Test.prototype.startPos = null;

        /**
         * Test endPos.
         * @member {Array.<coolcar.ILocation>} endPos
         * @memberof coolcar.Test
         * @instance
         */
        Test.prototype.endPos = $util.emptyArray;

        /**
         * Test end.
         * @member {string} end
         * @memberof coolcar.Test
         * @instance
         */
        Test.prototype.end = "";

        /**
         * Test durationSec.
         * @member {number} durationSec
         * @memberof coolcar.Test
         * @instance
         */
        Test.prototype.durationSec = 0;

        /**
         * Test feeCent.
         * @member {number} feeCent
         * @memberof coolcar.Test
         * @instance
         */
        Test.prototype.feeCent = 0;

        /**
         * Test status.
         * @member {coolcar.TestStatus} status
         * @memberof coolcar.Test
         * @instance
         */
        Test.prototype.status = 0;

        /**
         * Encodes the specified Test message. Does not implicitly {@link coolcar.Test.verify|verify} messages.
         * @function encode
         * @memberof coolcar.Test
         * @static
         * @param {coolcar.ITest} message Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.start);
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.end);
            if (message.durationSec != null && Object.hasOwnProperty.call(message, "durationSec"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.durationSec);
            if (message.feeCent != null && Object.hasOwnProperty.call(message, "feeCent"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.feeCent);
            if (message.startPos != null && Object.hasOwnProperty.call(message, "startPos"))
                $root.coolcar.Location.encode(message.startPos, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.endPos != null && message.endPos.length)
                for (let i = 0; i < message.endPos.length; ++i)
                    $root.coolcar.Location.encode(message.endPos[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.status);
            return writer;
        };

        /**
         * Creates a Test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coolcar.Test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coolcar.Test} Test
         */
        Test.fromObject = function fromObject(object) {
            if (object instanceof $root.coolcar.Test)
                return object;
            let message = new $root.coolcar.Test();
            if (object.start != null)
                message.start = String(object.start);
            if (object.startPos != null) {
                if (typeof object.startPos !== "object")
                    throw TypeError(".coolcar.Test.startPos: object expected");
                message.startPos = $root.coolcar.Location.fromObject(object.startPos);
            }
            if (object.endPos) {
                if (!Array.isArray(object.endPos))
                    throw TypeError(".coolcar.Test.endPos: array expected");
                message.endPos = [];
                for (let i = 0; i < object.endPos.length; ++i) {
                    if (typeof object.endPos[i] !== "object")
                        throw TypeError(".coolcar.Test.endPos: object expected");
                    message.endPos[i] = $root.coolcar.Location.fromObject(object.endPos[i]);
                }
            }
            if (object.end != null)
                message.end = String(object.end);
            if (object.durationSec != null)
                message.durationSec = object.durationSec | 0;
            if (object.feeCent != null)
                message.feeCent = object.feeCent | 0;
            switch (object.status) {
            case "TS_NOT_SPECIFIED":
            case 0:
                message.status = 0;
                break;
            case "A":
            case 1:
                message.status = 1;
                break;
            case "B":
            case 2:
                message.status = 2;
                break;
            case "C":
            case 3:
                message.status = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coolcar.Test
         * @static
         * @param {coolcar.Test} message Test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Test.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.endPos = [];
            if (options.defaults) {
                object.start = "";
                object.end = "";
                object.durationSec = 0;
                object.feeCent = 0;
                object.startPos = null;
                object.status = options.enums === String ? "TS_NOT_SPECIFIED" : 0;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = message.start;
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = message.end;
            if (message.durationSec != null && message.hasOwnProperty("durationSec"))
                object.durationSec = message.durationSec;
            if (message.feeCent != null && message.hasOwnProperty("feeCent"))
                object.feeCent = message.feeCent;
            if (message.startPos != null && message.hasOwnProperty("startPos"))
                object.startPos = $root.coolcar.Location.toObject(message.startPos, options);
            if (message.endPos && message.endPos.length) {
                object.endPos = [];
                for (let j = 0; j < message.endPos.length; ++j)
                    object.endPos[j] = $root.coolcar.Location.toObject(message.endPos[j], options);
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.coolcar.TestStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this Test to JSON.
         * @function toJSON
         * @memberof coolcar.Test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Test;
    })();

    coolcar.GetTestRequest = (function() {

        /**
         * Properties of a GetTestRequest.
         * @memberof coolcar
         * @interface IGetTestRequest
         * @property {string|null} [id] GetTestRequest id
         */

        /**
         * Constructs a new GetTestRequest.
         * @memberof coolcar
         * @classdesc Represents a GetTestRequest.
         * @implements IGetTestRequest
         * @constructor
         * @param {coolcar.IGetTestRequest=} [properties] Properties to set
         */
        function GetTestRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTestRequest id.
         * @member {string} id
         * @memberof coolcar.GetTestRequest
         * @instance
         */
        GetTestRequest.prototype.id = "";

        /**
         * Encodes the specified GetTestRequest message. Does not implicitly {@link coolcar.GetTestRequest.verify|verify} messages.
         * @function encode
         * @memberof coolcar.GetTestRequest
         * @static
         * @param {coolcar.IGetTestRequest} message GetTestRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTestRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Creates a GetTestRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coolcar.GetTestRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coolcar.GetTestRequest} GetTestRequest
         */
        GetTestRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.coolcar.GetTestRequest)
                return object;
            let message = new $root.coolcar.GetTestRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a GetTestRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coolcar.GetTestRequest
         * @static
         * @param {coolcar.GetTestRequest} message GetTestRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTestRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this GetTestRequest to JSON.
         * @function toJSON
         * @memberof coolcar.GetTestRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTestRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTestRequest;
    })();

    coolcar.GetTestResponse = (function() {

        /**
         * Properties of a GetTestResponse.
         * @memberof coolcar
         * @interface IGetTestResponse
         * @property {string|null} [id] GetTestResponse id
         * @property {coolcar.ITest|null} [test] GetTestResponse test
         */

        /**
         * Constructs a new GetTestResponse.
         * @memberof coolcar
         * @classdesc Represents a GetTestResponse.
         * @implements IGetTestResponse
         * @constructor
         * @param {coolcar.IGetTestResponse=} [properties] Properties to set
         */
        function GetTestResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetTestResponse id.
         * @member {string} id
         * @memberof coolcar.GetTestResponse
         * @instance
         */
        GetTestResponse.prototype.id = "";

        /**
         * GetTestResponse test.
         * @member {coolcar.ITest|null|undefined} test
         * @memberof coolcar.GetTestResponse
         * @instance
         */
        GetTestResponse.prototype.test = null;

        /**
         * Encodes the specified GetTestResponse message. Does not implicitly {@link coolcar.GetTestResponse.verify|verify} messages.
         * @function encode
         * @memberof coolcar.GetTestResponse
         * @static
         * @param {coolcar.IGetTestResponse} message GetTestResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetTestResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.test != null && Object.hasOwnProperty.call(message, "test"))
                $root.coolcar.Test.encode(message.test, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Creates a GetTestResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof coolcar.GetTestResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {coolcar.GetTestResponse} GetTestResponse
         */
        GetTestResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.coolcar.GetTestResponse)
                return object;
            let message = new $root.coolcar.GetTestResponse();
            if (object.id != null)
                message.id = String(object.id);
            if (object.test != null) {
                if (typeof object.test !== "object")
                    throw TypeError(".coolcar.GetTestResponse.test: object expected");
                message.test = $root.coolcar.Test.fromObject(object.test);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetTestResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof coolcar.GetTestResponse
         * @static
         * @param {coolcar.GetTestResponse} message GetTestResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetTestResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.test = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.test != null && message.hasOwnProperty("test"))
                object.test = $root.coolcar.Test.toObject(message.test, options);
            return object;
        };

        /**
         * Converts this GetTestResponse to JSON.
         * @function toJSON
         * @memberof coolcar.GetTestResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetTestResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetTestResponse;
    })();

    coolcar.TestService = (function() {

        /**
         * Constructs a new TestService service.
         * @memberof coolcar
         * @classdesc Represents a TestService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function TestService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (TestService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TestService;

        /**
         * Callback as used by {@link coolcar.TestService#getTest}.
         * @memberof coolcar.TestService
         * @typedef getTestCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {coolcar.GetTestResponse} [response] GetTestResponse
         */

        /**
         * Calls getTest.
         * @function getTest
         * @memberof coolcar.TestService
         * @instance
         * @param {coolcar.IGetTestRequest} request GetTestRequest message or plain object
         * @param {coolcar.TestService.getTestCallback} callback Node-style callback called with the error, if any, and GetTestResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(TestService.prototype.getTest = function getTest(request, callback) {
            return this.rpcCall(getTest, $root.coolcar.GetTestRequest, $root.coolcar.GetTestResponse, request, callback);
        }, "name", { value: "getTest" });

        /**
         * Calls getTest.
         * @function getTest
         * @memberof coolcar.TestService
         * @instance
         * @param {coolcar.IGetTestRequest} request GetTestRequest message or plain object
         * @returns {Promise<coolcar.GetTestResponse>} Promise
         * @variation 2
         */

        return TestService;
    })();

    return coolcar;
})();