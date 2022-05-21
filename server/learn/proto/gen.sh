protoc -I=. --go-grpc_out=paths=source_relative:gen/go  test.proto 
protoc -I=. --go_out=paths=source_relative:gen/go test.proto
protoc -I=. --grpc-gateway_out=paths=source_relative,grpc_api_configuration=test.yaml:gen/go test.proto

PBTS_BIN_DIR=../../../wx/miniprogram/node_modules/.bin
PBTS_OUT_DIR=../../../wx/miniprogram/service/proto_gen
$PBTS_BIN_DIR/pbjs -t static -w es6 test.proto --no-create  --no-decode --no-verify --no-delimited -o  $PBTS_OUT_DIR/test_pb_tmp.js
echo 'import * as $protobuf from "protobufjs";\n' > $PBTS_OUT_DIR/test_pb.js
cat $PBTS_OUT_DIR/test_pb_tmp.js >> $PBTS_OUT_DIR/test_pb.js 
rm  $PBTS_OUT_DIR/test_pb_tmp.js
$PBTS_BIN_DIR/pbts -o $PBTS_OUT_DIR/test_pb.d.ts $PBTS_OUT_DIR/test_pb.js