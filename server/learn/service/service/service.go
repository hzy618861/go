package test

import (
	"context"
	testpb "coolcar/learn/proto/gen/go"
)

// a trip service implementation
type Service struct {
	testpb.UnimplementedTestServiceServer
}

func (*Service) GetTest(c context.Context,
	req *testpb.GetTestRequest) (*testpb.GetTestResponse, error) {
	return &testpb.GetTestResponse{
		Id: req.Id,
		Test: &testpb.Test{
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
		},
	}, nil
}
