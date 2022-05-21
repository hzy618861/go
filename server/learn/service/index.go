package main

import (
	testpb "coolcar/learn/proto/gen/go"
	"encoding/json"
	"fmt"

	"github.com/golang/protobuf/proto"
)

func main() {
	test := testpb.Test{
		Start:       "abc",
		End:         "def",
		DurationSec: 3600,
		FeeCent:     10000,
		StartPos: &testpb.Location{
			Latitude:  10,
			Longitude: 20,
		},
		EndPos: []*testpb.Location{
			{
				Latitude:  10,
				Longitude: 20,
			},
			{
				Latitude:  10,
				Longitude: 30,
			},
		},
		Status: testpb.TestStatus_B,
	}
	fmt.Println(&test)
	b, err := proto.Marshal(&test)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%X\n", b) //二进制流
	var test2 testpb.Test
	err = proto.Unmarshal(b, &test2) //二进制用特定格式反解
	if err != nil {
		panic(err)
	}
	fmt.Println(&test2)
	b, err = json.Marshal(&test2)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s\n", b)
}
