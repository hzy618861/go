package main

import (
	"context"
	testpb "coolcar/learn/proto/gen/go"
	test "coolcar/learn/service/service"
	"log"
	"net"
	"net/http"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/encoding/protojson"
)

func main() {
	lis, err := net.Listen("tcp", ":8081")
	go startGrpcGateWay()
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	testpb.RegisterTestServiceServer(s, &test.Service{})
	log.Fatal(s.Serve(lis))
}
func startGrpcGateWay() {
	c := context.Background()
	c, cancel := context.WithCancel(c)
	defer cancel()
	mux := runtime.NewServeMux(runtime.WithMarshalerOption(
		runtime.MIMEWildcard, &runtime.JSONPb{
			MarshalOptions: protojson.MarshalOptions{
				UseEnumNumbers: true, //枚举类型输出数字
				UseProtoNames:  true, //下划线 不写为驼峰
			},
		},
	))
	err := testpb.RegisterTestServiceHandlerFromEndpoint(
		c,
		mux,
		"localhost:8081",
		[]grpc.DialOption{grpc.WithInsecure()},
	)
	if err != nil {
		log.Fatalf("cannot start grpc gateway:%v", err)
	}
	err = http.ListenAndServe(":8080", mux)
	if err != nil {
		log.Fatalf("cannot listen and server:%v", err)
	}
}
