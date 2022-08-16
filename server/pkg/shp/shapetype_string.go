// Code generated by "stringer -type=ShapeType"; DO NOT EDIT.

package shp

import "strconv"

func _() {
	// An "invalid array index" compiler error signifies that the constant values have changed.
	// Re-run the stringer command to generate them again.
	var x [1]struct{}
	_ = x[NULL-0]
	_ = x[POINT-1]
	_ = x[POLYLINE-3]
	_ = x[POLYGON-5]
	_ = x[MULTIPOINT-8]
	_ = x[POINTZ-11]
	_ = x[POLYLINEZ-13]
	_ = x[POLYGONZ-15]
	_ = x[MULTIPOINTZ-18]
	_ = x[POINTM-21]
	_ = x[POLYLINEM-23]
	_ = x[POLYGONM-25]
	_ = x[MULTIPOINTM-28]
	_ = x[MULTIPATCH-31]
}

const _ShapeType_name = "NULLPOINTPOLYLINEPOLYGONMULTIPOINTPOINTZPOLYLINEZPOLYGONZMULTIPOINTZPOINTMPOLYLINEMPOLYGONMMULTIPOINTMMULTIPATCH"

var _ShapeType_map = map[ShapeType]string{
	0:  _ShapeType_name[0:4],
	1:  _ShapeType_name[4:9],
	3:  _ShapeType_name[9:17],
	5:  _ShapeType_name[17:24],
	8:  _ShapeType_name[24:34],
	11: _ShapeType_name[34:40],
	13: _ShapeType_name[40:49],
	15: _ShapeType_name[49:57],
	18: _ShapeType_name[57:68],
	21: _ShapeType_name[68:74],
	23: _ShapeType_name[74:83],
	25: _ShapeType_name[83:91],
	28: _ShapeType_name[91:102],
	31: _ShapeType_name[102:112],
}

func (i ShapeType) String() string {
	if str, ok := _ShapeType_map[i]; ok {
		return str
	}
	return "ShapeType(" + strconv.FormatInt(int64(i), 10) + ")"
}