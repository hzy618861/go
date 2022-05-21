package main

import (
	"context"
	testpb "coolcar/learn/proto/gen/go"
	"fmt"
	"log"

	"google.golang.org/grpc"
)

func main() {
	con, err := grpc.Dial("localhost:8081", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("cannot call Gettest:%v", err)
	}
	tsClinet := testpb.NewTestServiceClient(con)
	r, err := tsClinet.GetTest(context.Background(), &testpb.GetTestRequest{
		Id: "123",
	})
	if err != nil {
		log.Fatalf("cannot call Gettest:%v", err)
	}
	fmt.Println(r)
}
