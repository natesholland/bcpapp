#!/usr/bin/ruby

path = ARGV[0]

text = File.read(path)

## strip out page numbers and horizontal rules
text.gsub!(/<p>\d+ &nbsp;&nbsp; <em>[a-zA-Z\s]+<\/em><\/p>/, "")
text.gsub!(/<p class="leftfoot">\d+&nbsp;&nbsp;&nbsp;&nbsp;<em>[a-zA-Z\s]+<\/em><\/p>/, "")
text.gsub!(/<p align="right"><em>[a-zA-Z\s]+<\/em>&nbsp;&nbsp;&nbsp;\d+<\/p>/, "")
text.gsub!(/<p class="rightfoot"><em>[a-zA-Z\s]+<\/em>&nbsp;&nbsp;&nbsp;&nbsp;\d+<\/p>/, "")
text.gsub!(/<hr>/, "")

# convert tags
text.gsub!(/<a name=".*">(.*)<\/a>/) { $1 }
text.gsub!(/<p class="rubric"><em>(.*)<\/em><\/p>/) { "<SmallItalic>#{$1}</SmallItalic>" }
text.gsub!(/<p class="rubric".*><em>(.*\n.*)<\/em><\/p>/) { "<SmallItalic>#{$1}</SmallItalic>" }
text.gsub!(/<font size="2"><em>(.*)<\/em><\/font>/) { "<SmallItalic>#{$1}</SmallItalic>" }
text.gsub!(/<em>(.*)<\/em>/) { "<Italic>#{$1}</Italic>" }
text.gsub!(/<em class="small">(.*)<\/em>/) { "<SmallItalic>#{$1}</SmallItalic>" }
text.gsub!(/<strong>(.*)<\/strong>/) { "<Bold>#{$1}</Bold>" }
text.gsub!(/<strong>/, "<Bold>")
text.gsub!(/<\/strong>/, "</Bold>")
text.gsub!(/&quot;/, "\"")
text.gsub!(/<p>/, "<BcpText>")
text.gsub!(/<\/p>/, "</BcpText>")

## white space clean up
text.gsub!(/<br\/>/, "{'\\n'}")
text.gsub!(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/, "{'       '}")
text.gsub!(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/, "{'      '}")
text.gsub!(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/, "{'     '}")
text.gsub!(/&nbsp;&nbsp;&nbsp;&nbsp;/, "{'    '}")
text.gsub!(/&nbsp;&nbsp;&nbsp;/, "{'   '}")
text.gsub!(/&nbsp;&nbsp;/, "{'  '}")
text.gsub!(/&nbsp;/, "{' '}")

puts text